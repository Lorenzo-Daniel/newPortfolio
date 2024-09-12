"use client";
import React, { useState } from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { LiaCertificateSolid } from "react-icons/lia";
import { SiFreelancer } from "react-icons/si";
import CarouselCertificates from "./Certificates";
import Resume from "./Resume";

const iconMap = {
  FaGithub,
  FaRegFileLines,
  GiGiftOfKnowledge,
  LiaCertificateSolid,
  SiFreelancer,
};

function CardLink({ item }) {
  const { name, className, text, componentName, link, isLink } = item;
  const IconComponent = iconMap[componentName];
  const [isVisble, setIsVisble] = useState({
    certificates: false,
    resume: false,
  });

  const handleClick = () => {
    if (name === "certificates") {
      setIsVisble({ certificates: true, resume: false });
    }
    if (name === "resume") {
      setIsVisble({ certificates: false, resume: true });
    }
    console.log(name);
  };

  return (
    <div>
      <CarouselCertificates
        isVisible={isVisble.certificates}
        setIsVisible={setIsVisble}
      />
      <Resume isVisible={isVisble.resume} setIsVisible={setIsVisble} />
      {isLink ? (
        <a href={link} target="_blank">
          <div className="flex justify-between items-center p-2 bg-gray-100 rounded sm:h-28 cursor-pointer shadow">
            <div className="flex flex-col items-center min-w-20">
              <IconComponent size={50} className={`${className}`} />
              <p className="text-sm">{name}</p>
            </div>
            <div className="flex flex-1 justify-center text-center ">
              <p className="text-sm md:text-lg">{text}</p>
            </div>
          </div>
        </a>
      ) : (
        <div
          className="flex justify-between items-center p-2 bg-gray-100 rounded sm:h-28 cursor-pointer shadow"
          onClick={() => handleClick(name)}
        >
          <div className="flex flex-col items-center min-w-20">
            <IconComponent size={50} className={`${className}`} />
            <p className="text-sm">{name}</p>
          </div>
          <div className="flex flex-1 justify-center text-center ">
            <p className="text-sm md:text-lg">{text}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardLink;
