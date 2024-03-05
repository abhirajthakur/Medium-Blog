import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

type Props = {
  id: string;
  title: string;
  authorName: string;
  content: string;
  publishedDate: string;
};

export const BlogCard = ({
  id,
  title,
  authorName,
  content,
  publishedDate,
}: Props) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="mb-8 cursor-pointer">
        <div className="flex items-center mb-2">
          <Avatar name={authorName} />
          <span className="ml-2 text-sm font-semibold">
            {authorName}
            <div className="inline-flex h-1 w-1 mx-2 mb-0.5 rounded-full bg-slate-500" />
            {publishedDate}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-lg mb-4">{content.slice(0, 175)}</p>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>16 min read</span>
        </div>
        <hr className="h-[1px] border-t-0 bg-neutral-200 opacity-100 my-4" />
      </div>
    </Link>
  );
};
