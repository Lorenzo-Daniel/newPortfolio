import React from "react";
import LinkIcon from "./LinkIcon";
import { linksData } from "./linksData";

function LinksPanel() {
  return (
    <div className="grid sm:grid-cols-2 justify-center gap-4 py-10  xl:py-20 mt-10 max-w-4xl">
      {linksData.map((item, i) => {
        return <LinkIcon key={i} item={item} />;
      })}
    </div>
  );
}

export default LinksPanel;
