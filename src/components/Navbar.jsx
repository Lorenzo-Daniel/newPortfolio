import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <header>
      <nav className="flex justify-end items-center h-20 bg-gray-200 bg-gradient-to-r from-[#b7cce3] p-4">
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
