import React from "react";
import { cardsProjectsData } from "./cardsProjectsData";
import CardProjects from "./CardProjects";

//-------------------------------------


function ProjetcsGrid() {
  return (
    <>
      <div className="flex flex-col py-10 xl:py-20 max-w-4xl">
        <div className=" flex justify-center">
          <h2 className=" text-center text-xl md:text-2xl ">
          Take a look at the apps I've built
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-10">
          {cardsProjectsData.map((item, i) => {
            return <CardProjects key={i} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ProjetcsGrid;
