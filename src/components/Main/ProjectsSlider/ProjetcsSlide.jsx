import React from "react";
import { imgLinksData } from "./imgLinkData";
import Image from "next/image";
function ProjetcsSlide() {
  return (
    <>
      <div className="flex flex-col py-10 xl:py-20 max-w-4xl">
        <div className=" flex justify-center">
          <h2 className=" text-center text-xl md:text-2xl ">
            Algunos proyectos en los que estuve trabajando
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-10">
          {imgLinksData.map((icon, index) => {
            return (
              <a href={icon.href} target="_blank" className="shadow p-3 hover:translate-y-[1px] flex justify-center items-center">
                <div key={index} className="flex flex-col items-center">
                  <Image
                    src={icon.url}
                    width={200}
                    height={100}
                    alt={icon.name}
                    className="border"
                  />
                  <p className="text-xs md:text-lg">{icon.name}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProjetcsSlide;
