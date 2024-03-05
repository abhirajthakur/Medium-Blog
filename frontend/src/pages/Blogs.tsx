import { BlogCard } from "../components/BlogCard";
import { Navbar } from "../components/Navbar";
import { useBlogs } from "../hooks/blogs";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto py-8 px-4">
        {blogs.map((blog) => (
          <BlogCard
            id={blog.id}
            authorName={blog.author.name}
            title={blog.title}
            content={blog.content}
            publishedDate="Feb 14, 2024"
          />
        ))}
      </div>
    </div>
  );
};
