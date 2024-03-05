import { useParams } from "react-router-dom";
import { Avatar } from "../components/Avatar";
import { useBlog } from "../hooks/blogs";
import { Navbar } from "../components/Navbar";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog(id || "");
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto my-8 p-4">
        <h1 className="text-5xl font-bold leading-tight mb-4">{blog?.title}</h1>
        <div className="flex items-center space-x-4 mb-8">
          <Avatar name={blog?.author.name || ""} />
          <p className="text-sm font-semibold">{blog?.author.name}</p>
        </div>
        <div className="flex items-center justify-between text-gray-600">
          {/* <div className="flex items-center space-x-2"> */}
          {/*   <ClockIcon className="h-5 w-5" /> */}
          {/*   <span className="text-sm">13 min read</span> */}
          {/* </div> */}
          {/* <span className="text-sm">22 hours ago</span> */}
        </div>
        <article className="prose">
          <p>{blog?.content}</p>
        </article>
      </div>
    </div>
  );
};

function ClockIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
