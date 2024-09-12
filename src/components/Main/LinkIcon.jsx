import React from "react";
//-----------------------------------

function LinkIcon({ item }) {
  const { name, className, text } = item;
  const IconComponent = item.component;
  return (
    <div className="flex justify-between items-center p-2 bg-gray-100 rounded sm:h-28 hover:translate-y-[1px]">
      <div className="flex flex-col items-center min-w-20 ">
        <IconComponent size={50} className={`${className}`} />
        <p className="text-sm">{name}</p>
      </div>
      <div className="flex flex-1 justify-center text-center ">
        <p className="text-sm md:text-lg">{text}</p>
      </div>
    </div>
  );
}
export default LinkIcon;
