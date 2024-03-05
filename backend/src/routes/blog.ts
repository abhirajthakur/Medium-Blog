import { createBlogInput, updateBlogInput } from "@abhirajthakur/medium-common";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

type Bindings = {
  DATABASE_URL: string;
  SECRET_KEY: string;
};

type Variables = {
  userId: string;
};

export const blogRouter = new Hono<{
  Bindings: Bindings;
  Variables: Variables;
}>();

blogRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    c.status(401);
    return c.json({ error: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const payload = await verify(token, c.env.SECRET_KEY);
    c.set("userId", payload.id);
    await next();
  } catch (err) {
    c.status(401);
    return c.json({ error: "Unauthorized" });
  }
});

blogRouter.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const userId = c.get("userId");
  const body = await c.req.json();

  const { success } = createBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ error: "Incorrect inputs" });
  }

  const post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: userId,
    },
  });

  return c.json({ id: post.id });
});

blogRouter.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const userId = c.get("userId");
  const body = await c.req.json();

  const { success } = updateBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ error: "Incorrect inputs" });
  }

  try {
    await prisma.post.update({
      where: {
        id: body.id,
        authorId: userId,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return c.text("Post Updated");
  } catch (err: any) {
    c.status(400);
    return c.json({ error: err.message });
  }
});

blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  let page = Number(c.req.query("page")) || 1;
  let pageSize = Number(c.req.query("pageSize")) || 10;

  const skip = (page - 1) * pageSize;

  try {
    const posts = await prisma.post.findMany({
      skip: skip,
      take: pageSize,
      select: {
        id: true,
        content: true,
        title: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return c.json({ posts: posts });
  } catch (e) {
    console.log(e);
    c.status(403);
    return c.json({ error: "Blogs not found" });
  }
});

blogRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const id = c.req.param("id");

  try {
    const post = await prisma.post.findFirst({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return c.json(post);
  } catch (e) {
    c.status(403);
    return c.json({ error: "Blog not found" });
  }
});
