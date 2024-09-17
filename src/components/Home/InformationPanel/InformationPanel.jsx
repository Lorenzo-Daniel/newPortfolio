"use client";
import React from "react";
import { linksData } from "./linksData";
import InformationPanelCard from "./InformationPanelCard";
//-----------------------------------

function InformationGrid() {
  return (
    <div className="grid sm:grid-cols-2 justify-center gap-4 py-10  xl:py-20 mt-5 max-w-4xl">
      {linksData.map((item, i) => {
        return <InformationPanelCard key={i} item={item} />;
      })}
    </div>
  );
}

export default InformationGrid;
