"use client";
import React from "react";
import Image from "next/image";
import avatar from "@/app/assets/images/da1.jpg";
import LinksPanel from "../Main/LinksPanel";
import GridIcons from "./GridIcons";

function Aside() {
  return (
    <div className="flex  flex-col lg:flex-row items-center w-dvw justify-evenly">
      {/* <div className="flex flex-col justify-center mt-20 px-2  lg:max-w-sm ">
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
      </div> */}
      <LinksPanel/>
       <GridIcons props={''}
       />
    </div>
  );
}

export default Aside;
