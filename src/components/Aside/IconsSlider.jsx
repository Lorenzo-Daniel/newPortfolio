import React from "react";
import { tecnoIconsData } from "./tecnoIconsData";

function IconsSlider() {
  return (
    <div className="overflow-hidden">
      <div className="flex gap-6 animation-cards-left mt-5 md:hidden ">
        {tecnoIconsData.map((icon, index) => {
          const IconComponent = icon.component;
          return (
            <div key={index} className="flex flex-col items-center ">
              <IconComponent size={40} className={`${icon.className}`} />
              <p className="text-xs">{icon.name}</p>
            </div>
          );
        })}
        {tecnoIconsData.map((icon, index) => {
          const IconComponent = icon.component;
          return (
            <div key={index} className="flex flex-col items-center">
              <IconComponent size={40} className={`${icon.className} `} />
              <p className="text-xs">{icon.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default IconsSlider;
