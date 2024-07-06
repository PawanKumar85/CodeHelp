import React from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="bg-gray-400 text-white font-bold p-7 shadow-lg text-2xl w-full">
      <nav className="flex  md:justify-center justify-between">
        <h1>Top Courses</h1>

        <div className="md:hidden">
          <IoMenu fontSize={30} className="text-white font-bold"/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
