"use client";
import { useState } from "react";
import JS from "/public/certificados/JavaScript.png";
import DW from "/public/certificados/DesarrolloWeb.png";
import React from "/public/certificados/React.png";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import { CircleLoader } from "react-spinners";

const CertificatesModal = ({ isVisible, setIsVisible }) => {
  const [currentImg, setcurrentImg] = useState(React);
  const [isLoaded, setIsLoaded] = useState(true);
  const images = [
    { name: "React", img: React },
    { name: "JS", img: JS },
    { name: "DW", img: DW },
  ];

  if (!isVisible) {
    return;
  }
  const handleClickImg = (img) => {
    setcurrentImg(img);
  };
  const handleClose = () => {
    setIsVisible({ certificates: false, resume: false });
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full min-h-screen bg-[#08080aee] flex justify-center items-center overflow-scroll">
      <CircleLoader loading={isLoaded} color="white" />
      <div className={` max-w-4xl flex flex-col relative p-5 mt-20  `}>
        <div
          className={`flex justify-end mb-2 ${isLoaded ? "hidden" : "block"}`}
        >
          <IoCloseOutline
            size={30}
            className={`md:absolute right-5 top-5 cursor-pointer text-white text-end`}
            onClick={() => handleClose()}
          />
        </div>
        <div className={`flex top-4 justify-center sm:justify-start mb-5 gap-2  ${isLoaded ? "hidden" : "block"}`}>
          {images.map((item, i) => {
            return (
              <div key={i} className="w-24 cursor-pointer hover:scale-105 ">
                <Image
                  src={item.img}
                  width={0}
                  height={"auto"}
                  alt={item.name}
                  onClick={() => handleClickImg(item.img)}
                  onLoad={() => {
                    setIsLoaded(false);
                  }}
                />
              </div>
            );
          })}
        </div>
        <Image
          src={currentImg}
          width={"auto"}
          height={"auto"}
          alt="Selected image"
          onLoad={() => {
            setIsLoaded(false);
          }}
        />
      </div>
    </div>
  );
};

export default CertificatesModal;
