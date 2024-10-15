import React from "react";
import Button from "./Button";
import Link from "next/link";

const Innovative = () => {
  return (
    <div className="py-10 md:py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-[--darkBlueColor] py-10 px-12 rounded-lg col-span-1 md:col-span-2">
          <h2 className="text-[--secondaryColor] text-[40px] md:text-[80px] font-black leading-tight mb-10">
            Innovative Digital Agency
          </h2>
          <Button
            title="Free Consultantion"
            bgColor="#2CEE91"
            hoverText="#343651"
            icon="#fff"
          />
        </div>
        <div className="bg-[--darkBlueColor] py-10 px-12 rounded-lg hover:bg-slate-800 transition-all hover:translate-x-3 hover:skew-y-2">
          <p className="text-[--secondaryColor] font-bold text-[30px]">01</p>
          <h2 className="text-[35px] text-white font-bold"> UI/UX Design</h2>
          <ul className="mt-7">
            <li className="mb-3 hover:text-[--secondaryColor]">
              <Link href="/">Landing Page</Link>
            </li>
            <li className="mb-3 hover:text-[--secondaryColor]">
              <Link href="/">Logo Design</Link>
            </li>
            <li className="mb-3 hover:text-[--secondaryColor]">
              <Link href="/">Banner Design</Link>
            </li>
            <li className="mb-3 hover:text-[--secondaryColor]">
              <Link href="/">Social Media Post</Link>
            </li>
            <li className="mb-3 hover:text-[--secondaryColor]">
              <Link href="/">Broucher Design</Link>
            </li>
          </ul>
        </div>
        <div className="bg-[--darkBlueColor] py-10 px-12 rounded-lg hover:bg-slate-800 transition-all hover:translate-x-3 hover:skew-y-2">
          <p className="text-[--secondaryColor] font-bold text-[30px]">02</p>
          <h2 className="text-[35px] text-white font-bold"> Web Development</h2>
          <ul className="mt-7">
            <li className="mb-3 hover:text-[--secondaryColor]">
              <Link href="/">Custom Web Development</Link>
            </li>
            <li className="mb-3 hover:text-[--secondaryColor]">
              <Link href="/">React Development</Link>
            </li>
            <li className="mb-3 hover:text-[--secondaryColor]">
              <Link href="/">WordPress Development</Link>
            </li>
            <li className="mb-3 hover:text-[--secondaryColor]">
              <Link href="/">E-Commerce Development</Link>
            </li>
            <li className="mb-3 hover:text-[--secondaryColor]">
              <Link href="/">CMS Development</Link>
            </li>
          </ul>
        </div>
        <div className="bg-[--darkBlueColor] py-10 px-12 rounded-lg hover:bg-slate-800 transition-all hover:translate-x-3 hover:skew-y-2">
          <p className="text-[--secondaryColor] font-bold text-[30px]">03</p>
          <h2 className="text-[35px] text-white font-bold">
            {" "}
            Digital Marketing
          </h2>
          <ul className="mt-7">
            <li className="mb-3 hover:text-[--secondaryColor]">
              <Link href="/">Search Engine Optimization</Link>
            </li>
            <li className="mb-3 hover:text-[--secondaryColor]">
              <Link href="/">Social Media Marketing</Link>
            </li>
            <li className="mb-3 hover:text-[--secondaryColor]">
              <Link href="/">Brand Marketing</Link>
            </li>
            <li className="mb-3 hover:text-[--secondaryColor]">
              <Link href="/">Ads Marketing</Link>
            </li>
          </ul>
        </div>
        <div className="bg-[--darkBlueColor] py-10 px-12 rounded-lg hover:bg-slate-800 transition-all hover:translate-x-3 hover:skew-y-2">
          <p className="text-[--secondaryColor] font-bold text-[30px]">04</p>
          <h2 className="text-[35px] text-white font-bold"> Video Editing</h2>
          <ul className="mt-7">
            <li className="mb-3 hover:text-[--secondaryColor]">
              <Link href="/">Concept Creative</Link>
            </li>
            <li className="mb-3 hover:text-[--secondaryColor]">
              <Link href="/">Storyteller Video</Link>
            </li>
            <li className="mb-3 hover:text-[--secondaryColor]">
              <Link href="/">Tech Video </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Innovative;
