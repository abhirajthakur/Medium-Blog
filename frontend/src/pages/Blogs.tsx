import { BlogCard } from "../components/BlogCard";
import { BlogsLoadingSkeleton } from "../components/BlogsLoadingSkeleton";
import { Navbar } from "../components/Navbar";
import { useBlogs } from "../hooks/blogs";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="mt-4 overflow-y-hidden">
          <BlogsLoadingSkeleton />
          <BlogsLoadingSkeleton />
          <BlogsLoadingSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto py-8 px-4">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            authorName={blog.author.name}
            title={blog.title}
            content={blog.content}
            publishDate={blog.publishDate}
          />
        ))}
      </div>
    </div>
  );
};
