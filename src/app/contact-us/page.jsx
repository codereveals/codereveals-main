import Button from "@/components/Button";
import React from "react";

const ContactUsPage = () => {
  return (
    <>
      <section className="container">
        <div className="w-full">
          <h3 className="text-center">
            Home / <span className="text-[--secondaryColor]">Contact-us</span>
          </h3>
          <h2 className="text-3xl lg:text-5xl font-bold text-center">
            Coffee With CodeReveals
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 py-10 lg:py-14">
          <div className="w-full md:w-[59%] rounded-lg bg-[--darkBlueColor] p-8">
            <div className="p-3">
              <p className="text-[--secondaryColor] font-semibold">
                Got a project in Mind?
              </p>

              <form action="" className="my-10">
                <div className="max-w-xl">
                  <input
                    className="focus:ring-2 focus:ring-blue-500 bg-[--darkBlueColor] focus:outline-none appearance-none w-full text-md leading-6 text-slate-900 placeholder-white rounded-md py-4 pl-6 ring-1 ring-green-200 shadow-sm"
                    type="text"
                    placeholder="Enter Name"
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    <input
                      className="focus:ring-2 focus:ring-blue-500 bg-[--darkBlueColor] focus:outline-none appearance-none w-full text-md leading-6 text-slate-900 placeholder-white rounded-md py-4 pl-6 ring-1 ring-green-200 shadow-sm"
                      type="text"
                      placeholder="Enter Name"
                    />
                    <input
                      className="focus:ring-2 focus:ring-blue-500 bg-[--darkBlueColor] focus:outline-none appearance-none w-full text-md leading-6 text-slate-900 placeholder-white rounded-md py-4 pl-6 ring-1 ring-green-200 shadow-sm"
                      type="text"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="grid grid-cols-1  gap-5 mt-6">
                    <textarea
                      placeholder="Hello from codereveals"
                      id=""
                      className="focus:ring-2 focus:ring-blue-500 bg-[--darkBlueColor] focus:outline-none appearance-none w-full text-md leading-6 text-slate-900 placeholder-white rounded-md py-4 pl-6 ring-1 ring-green-200 shadow-sm"
                    ></textarea>
                  </div>
                </div>
              </form>

              <Button
                title="Submit"
                bgColor="#2CEE91"
                hoverText="#343651"
                icon="#fff"
              />
            </div>
          </div>
          <div className="w-full md:w-[40%] rounded-lg bg-[--doplyColor] p-8">
            <div>
              <div className="w-[120px] h-[120px] rounded-full bg-[--primaryColor] "></div>
              <h2 className="py-4 text-[--primaryColor] font-bold text-lg">
                Let`s Grow on a free call
              </h2>
              <p className="py-2 text-[--primaryColor]">
                We understand your business deserves the best, so you`re
                cautious about your choice. We would be too.
              </p>
              <div className="mt-10">
                <Button
                  title="Schedule A Call"
                  bgColor="#fff"
                  hoverText="#343651"
                  icon="#2CEE91"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;
