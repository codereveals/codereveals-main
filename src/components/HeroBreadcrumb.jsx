import Image from "next/image";
import React from "react";

const HeroBreadcrumb = ({ title, desc, subTitle }) => {
  return (
    <>
      <div className="w-full relative rounded-xl h-auto lg:h-[500px] flex flex-col justify-end items-start bg-[--darkBlueColor] px-4 lg:px-11">
        <Image
          src="/assets/images/circle-img.svg"
          width={300}
          height={300}
          alt="Circle Image"
          className="absolute top-5 right-5 invisible lg:visible"
        />
        <div className="flex flex-col my-8 lg:mb-24 max-w-3xl">
          <h3 className=" text-md text-[--secondaryColor]">
            /{subTitle || "What we do?"}
          </h3>
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
