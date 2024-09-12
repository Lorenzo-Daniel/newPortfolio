import React from "react";
import { tecnoIconsData } from "./tecnoIconsData";

function GridIcons() {
  return (
    <div className={`py-10 xl:py-20`}>
       <div className="">
        <div className="mb-10">
          <h2 className="text-center text-xl  md:text-2xl">
            Algunas tecnologias con las que estoy familiarizado
          </h2>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-4 mt-5">
          {tecnoIconsData.map((icon, index) => {
            const IconComponent = icon.component;
            return (
              <div key={index} className="flex flex-col items-center">
                <IconComponent
                  className={`${icon.className} text-4xl sm:text-5xl`}
                />
                <p className="text-xs ">{icon.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default GridIcons;
