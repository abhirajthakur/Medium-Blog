import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

export const Navbar = () => {
  return (
    <header className="border-b flex h-16 w-full items-center px-4 md:px-6">
      <div className="flex w-full items-center py-2 text-lg font-semibold">
        <Link to={"/blogs"}>Medium</Link>
      </div>
      <div>
        <Avatar name="Abhiraj Thakur" />
      </div>
    </header>
  );
};
