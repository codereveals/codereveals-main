"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/app/assets/images/code-reveals-logo.svg";
import Link from "next/link";
import Button from "./Button";
import Menu from "./Menu";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="container">
        <div className="py-4 md:py-6 flex justify-between">
          <div className="logo">
            <Link href="/">
              <Image
                src={logo}
                width={120}
                height={80}
                alt="logo"
                className="w-[120px] lg:w-[250px]"
              />
            </Link>
          </div>

          <div
            className="visible md:invisible"
            onClick={() => setOpen((prev) => !prev)}
          >
            <IoMenu />
          </div>

          <div
            className={`flex gap-8 flex-col fixed md:static transition-all delay-75 -right-[100%] top-0 md:flex-row items-center ${
              open && "right-20 p-8 top-10 bg-[#343651] rounded-md  z-20 h-full"
            }`}
          >
            <Menu />
            <Button title="Free Consultation" bgColor="#2CEE91" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
