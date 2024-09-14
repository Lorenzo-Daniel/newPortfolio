"use client";
import React, { useState } from "react";
import curriculum from "@/app/assets/images/Currículum English.jpg";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import { CircleLoader } from "react-spinners";

const Certificates = ({ isVisible, setIsVisible }) => {
  const [isLoaded, setIsLoaded] = useState(true);

  if (!isVisible) {
    return;
  }

  const handleClose = () => {
    setIsVisible({ certificates: false, resume: false });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full min-h-screen bg-[#08080aee] flex justify-center items-center overflow-scroll p-5">
      <CircleLoader loading={isLoaded} color={"white"} />

      <div className="">
        <div
          className={`flex justify-end mb-1 cursor-pointer ${
            isLoaded ? "hidden" : "block"
          }`}
        >
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
            onLoad={()=> setIsLoaded(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
