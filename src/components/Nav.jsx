import React from "react";
import { Link } from "react-router-dom";
import Signout from "./Signout";

function Nav() {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Centered MyWebsite */}
        <div className="flex-1 text-center">
          <Link
            to="/"
            className="text-white text-2xl font-bold hover:text-gray-400 transition duration-300"
          >
            MyWebsite
          </Link>
        </div>

        <div className="space-x-4 flex items-center">
          <Signout />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
