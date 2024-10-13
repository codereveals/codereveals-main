import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Button = ({ title, bgColor, icon, textColor }) => {
  return (
    <Link
      href=""
      className={`gap-2 mr-4 transition ease-in-out delay-150 rounded-full text-[${textColor}] ps-6 pe-4 py-2  inline-block group hover:opacity- hover:scale-105`}
      style={{ backgroundColor: bgColor }}
    >
      <span className="flex items-center gap-2 ">
        <span className="text-black transition ease-in-out delay-150 group-hover:text-slate-800 pe-3">
          {title}
        </span>
        <span
          className="w-[30px] h-[30px] p-2 text-[--darkBlueColor]  inline-block rounded-full transition ease-in-out delay-150 group-hover:-rotate-45"
          style={{ backgroundColor: icon }}
        >
          {" "}
          <FaArrowRight />
        </span>
      </span>
    </Link>
  );
};

export default Button;
