import React from "react";
import Button from "./Button";
import Image from "next/image";
import { webimg } from "@/app/assets/images";

const HeroBanner = () => {
  return (
    <div className="min-h-screen relative">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex flex-col w-full md:pe-11 md:w-[48%] justify-center items-center pt-10 md:pt-0 md:min-h-screen">
            <div className="text-white">
              <h1 className="lg:text-6xl text-2xl  mb-6">
                Partnering for Success from{" "}
                <span className="font-extrabold text-[--secondaryColor]  ">
                  Concept to Reality.
                </span>
              </h1>
              <p className="mb-4 text-slate-200">
                We believe in change! Our passion is using technology and
                innovation to drive it. We assist businesses and individuals in
                embracing and implementing digital transformation. Our goal is
                to enhance lives and boost businesses with our forward-thinking
                tech solutions.
              </p>
              <div className="py-6 text-center md:text-start">
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
                <h2 className="text-xl lg:text-4xl">
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
