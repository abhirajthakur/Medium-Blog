import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

type Props = {
  id: string;
  title: string;
  authorName: string;
  content: string;
  publishDate: Date;
};

export const BlogCard = ({
  id,
  title,
  authorName,
  content,
  publishDate,
}: Props) => {
  const getFormattedDate = () => {
    const date = new Date(publishDate);
    const formattedDate = `${date.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })}`;
    return formattedDate;
  };

  return (
    <Link to={`/blog/${id}`}>
      <div className="mb-8 cursor-pointer">
        <div className="flex items-center mb-2">
          <Avatar name={authorName} />
          <span className="ml-2 text-sm font-semibold">
            {authorName}
            <div className="inline-flex h-1 w-1 mx-2 mb-0.5 rounded-full bg-slate-500" />
            {getFormattedDate()}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-lg mb-4">
          {JSON.parse(content).root.children[0].children[0].text.slice(0, 150)}
          {"..............."}
        </p>
        <hr className="h-[1px] border-t-0 bg-neutral-200 opacity-100 my-4" />
      </div>
    </Link>
  );
};
