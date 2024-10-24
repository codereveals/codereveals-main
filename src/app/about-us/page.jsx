import React from "react";
import { FaCheck } from "react-icons/fa";

const AboutusPage = () => {
  return (
    <>
      <div className="container px-5">
        <div className="w-full mx-auto my-10">
          <h5 className="text-[--secondaryColor]">Company</h5>
          <h2 className="text-lg md:text-2xl xl:text-6xl font-bold py-4">
            Designing digital products that make a positive impact is what we do
          </h2>
          <p>
            Code Reveals, we cater to learners at every stage, providing
            meticulously crafted content that seamlessly guides you from
            foundational principles to advanced techniques.
          </p>

          <div className="my-10 bg-[--secondaryColor] rounded-lg max-w-6xl mx-auto h-96 w-full"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-10 lg:py-16">
          <div className="flex flex-col">
            <h6 className="text-[--secondaryColor] text-lg lg:text-2xl">
              We have worked for you
            </h6>
            <h2 className="text-[] stroke-cyan-500 text-lg lg:text-8xl font-bold">
              Since 2022
            </h2>
          </div>
          <div className="flex flex-col  w-full">
            <h2 className="text-[--doplyColor] text-2xl font-bold my-8">
              Grow Your Business with Creative Ideas
            </h2>
            <div className="flex flex-col lg:flex-row gap-10 bg-[--darkBlueColor] rounded-lg p-6">
              <div className="w-[8%] flex ">
                <div className="w-14 h-14 rounded-full bg-[--secondaryColor] flex justify-center items-center">
                  <FaCheck />
                </div>
              </div>
              <div className="w-[92%]">
                <h2 className="font-bold text-[--secondaryColor] text-2xl lg:text-4xl mb-4">
                  Professional Agency
                </h2>
                <p>
                  Seeking a professional agency for your IT company? Look no
                  further. Our specialized agency offers tailored solutions to
                  meet the unique needs of technology businesses.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 mt-14 bg-[--darkBlueColor] rounded-lg p-6">
              <div className="w-[8%] flex ">
                <div className="w-14 h-14 rounded-full bg-[--secondaryColor] flex justify-center items-center">
                  <FaCheck />
                </div>
              </div>
              <div className="w-[92%]">
                <h2 className="font-bold text-[--secondaryColor] text-2xl lg:text-4xl mb-4">
                  Solutions Provider
                </h2>
                <p>
                  Your go-to solutions provider for all your IT company`s needs.
                  From software development to cybersecurity, we offer tailored
                  solutions to drive your business forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutusPage;
