import React from "react";
import Link from "next/link";
import { BsFillBriefcaseFill } from "react-icons/bs";

function Navbar() {
  return (
    <header>
      <nav className="flex justify-between items-center h-20 bg-gray-200 bg-gradient-to-r from-[#b7cce3] p-4 shadow-md">
        <Link href={"/"}>
          <BsFillBriefcaseFill size={30} className="text-gray-400" />
        </Link>
        <div className="flex gap-2 mr-10">
          <Link href={"/about"}>
            <span className="hover:text-gray-700">About</span>
          </Link>
          <Link href={"/contact"}>
            <span className="hover:text-gray-700">contact</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
