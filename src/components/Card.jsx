import Image from "next/image";
import React from "react";

const Card = ({ props }) => {
  return (
    <div className="bg-[--darkBlueColor] rounded-xl w-full p-8 flex flex-col hover:bg-slate-600 cursor-pointer transition-all">
      <div className="py-2 text-right self-end">
        <Image
          src={props?.icon}
          width={60}
          height={60}
          alt={props?.title}
          className=""
        />
      </div>
      <div className="pb-5 self-start">
        <h2 className="text-[--secondaryColor] font-bold text-[32px]">
          {props?.title}
        </h2>
      </div>
      <div className="self-start">
        <p className="text-start">{props?.desc}</p>
      </div>
    </div>
  );
};

export default Card;
