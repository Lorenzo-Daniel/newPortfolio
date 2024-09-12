"use client";
import React from "react";
import curriculum from "@/app/assets/images/Currículum English.jpg";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";

const Certificates = ({ isVisible, setIsVisible }) => {
  if (!isVisible) {
    return;
  }

  const handleClose = () => {
    setIsVisible({ certificates: false, resume: false });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full min-h-screen bg-[#08080aee] flex justify-center items-center overflow-scroll p-5">
      <div className="">
        <div className="flex justify-end mb-1 cursor-pointer">
          <IoCloseOutline
            size={30}
            className=" text-gray-500"
            onClick={() => handleClose()}
          />
        </div>
        <div className="max-w-xl">
          <Image
            src={curriculum}
            width={800}
            height={600}
            alt="Selected image"
          />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
