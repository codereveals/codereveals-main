import React from "react";

const HeroBreadcrumb = ({ title, desc }) => {
  return (
    <>
      <div className="w-full rounded-xl h-[500px] flex flex-col justify-end items-start bg-[--darkBlueColor] px-11">
        <div className="flex flex-col mb-24 max-w-3xl">
          <h3 className="text-white text-md">/services</h3>
          <h2 className="text-xl lg:text-5xl text-white font-bold my-4">
            {title}
          </h2>

          <p className="text-white text-md">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default HeroBreadcrumb;
