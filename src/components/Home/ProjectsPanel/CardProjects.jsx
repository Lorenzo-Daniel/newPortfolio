import React from "react";
import Image from "next/image";

//--------------------------------

function CardProjects({ item }) {
  const { href, url, name } = item;
  return (
    <a
      href={href}
      target="_blank"
      className=" hover:translate-y-[1px] flex justify-center items-center"
    >
      <div className="flex flex-col items-center">
        <Image
          src={url}
          width={200}
          height={100}
          alt={name}
          className="border shadow "
          unoptimized
        />
        <p className="text-xs md:text-lg">{name}</p>
      </div>
    </a>
  );
}

export default CardProjects;
