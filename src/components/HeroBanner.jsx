import React from "react";
import Button from "./Button";
import Image from "next/image";
import { webimg } from "@/app/assets/images";

const HeroBanner = () => {
  return (
    <div className="min-h-screen relative">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex flex-col w-full md:w-[48%] justify-center items-center min-h-screen">
            <div className="text-white">
              <h1 className="text-6xl mb-6">
                Partnering for Success from{" "}
                <span className="font-extrabold text-[--secondaryColor]  ">
                  Concept to Reality.
                </span>
              </h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                error laborum tempora voluptatem veritatis neque amet qui
                nostrum nulla facilis?
              </p>
              <div className="py-6">
                <Button
                  title="Free Consultantion"
                  bgColor="#2CEE91"
                  hoverText="#343651"
                  icon="#fff"
                />{" "}
                <Button
                  title="Get Started"
                  bgColor="#fff"
                  hoverText="#343651"
                  icon="#2CEE91"
                />
              </div>
            </div>
          </div>
          <div className=" w-full md:w-[48%]">
            <div>
              <Image
                src={webimg}
                width={600}
                height={600}
                alt="img"
                className="rounded-md w-full"
              />
              <div className="bg-slate-800 rounded-md p-8 mt-3">
                <h2 className="text-4xl">
                  <span className="text-[--secondaryColor] font-bold">
                    UI/UX{" "}
                  </span>{" "}
                  Development
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
