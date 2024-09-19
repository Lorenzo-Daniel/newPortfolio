"use client";
import React, { useState } from "react";
import curriculum from "/public/images/CV.png";

import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import { CircleLoader } from "react-spinners";

const ResumeModal = ({ isVisible, setIsVisible }) => {
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
          className={`flex justify-between mb-1 cursor-pointer ${
            isLoaded ? "hidden" : "block"
          }`}
        >
            <a href="/pdf/CV-Daniel-Lorenzo.pdf " download>
              <button className="border border-gray-500 px-1 mb-1  rounded ">
                Download PDF
              </button>
            </a>
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
            onLoad={() => setIsLoaded(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
