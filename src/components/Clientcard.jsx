import Image from "next/image";
import React from "react";

const Clientcard = ({ props }) => {
  return (
    <div className="bg-[--darkBlueColor] h-full  rounded-xl w-full p-8 flex flex-col hover:bg-slate-600 cursor-pointer transition-all">
      <div className="min-h-[50px]">
        <Image
          src={props.clientLogo}
          width={600}
          height={400}
          alt={props.title}
          className="w-full rounded-lg max-w-[120px]"
        />
      </div>

      <h2 className="text-[--secondaryColor] my-0 lg:my-5 font-semibold">
        {props.title}
      </h2>
      <p className="text-sm my-4">{props.desc}</p>
      <div className="my-4 flex gap-3">
        <div className="w-10 h-10 bg-[--secondaryColor] rounded-full"></div>
        <div>
          <p className="font-semibold text-sm text-white">{props.clientName}</p>
          <p className="text-sm text-white">{props.companyName}</p>
        </div>
      </div>
    </div>
  );
};

export default Clientcard;
