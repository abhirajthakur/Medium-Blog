import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

export const Navbar = () => {
  return (
    <header className="sticky top-0 bg-white shadow-md flex h-16 w-full items-center px-6 md:px-8">
      <div className="flex w-full items-center py-2 text-lg font-semibold">
        <Link to={"/blogs"}>Medium</Link>
      </div>
      <div className="flex items-center">
        <Link
          to={"/publish"}
          className="mr-4 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:outline-none shadow-md shadow-green-500/50 font-medium rounded-full text-sm px-4 py-1.5 text-center"
        >
          New
        </Link>
        <Avatar name={localStorage.getItem("name") || ""} />
      </div>
    </header>
  );
};
