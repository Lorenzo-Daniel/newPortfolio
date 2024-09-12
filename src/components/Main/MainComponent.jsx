import React from "react";
import LinksPanel from "./LinksPanel";
import ProjetcsSlide from "./ProjectsSlider/ProjetcsSlide";
import GridIcons from "../Aside/GridIcons";

//--------------------------------------

function MainComponent() {
  return (
    <section className=" ">
      <GridIcons props={""} />
      <ProjetcsSlide />
    </section>
  );
}

export default MainComponent;
