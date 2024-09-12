import React from "react";
import avatar from "@/app/assets/images/da1.jpg";
import Image from "next/image";
function Hero() {
  return (
    <div className="flex flex-col mt-10 px-5 max-w-sm xl:max-w-md mb-5">
      <Image
        className="rounded-full"
        src={avatar}
        width={"auto"}
        alt="avatar"
      />
      <div className="flex flex-col justify-center items-center mt-5">
        <h1 className="text-4xl ">Daniel Lorenzo</h1>
        <span>React Developer</span>
      </div>
    </div>
  );
}

export default Hero;
