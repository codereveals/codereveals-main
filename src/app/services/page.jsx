import Button from "@/components/Button";
import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServicesPage = () => {
  return (
    <>
      <div className="container">
        <HeroBreadcrumb
          title="Services"
          desc="Introduce the digital marketing service company and its mission to help businesses grow and thrive in the digital landscape. Highlight the company's experience, expertise, and dedication to providing top-notch digital marketing solutions."
        />

        <div className="w-full my-10 ">
          <div className="flex flex-col my-4 lg:my-10 items-center justify-center ">
            <h3 className="text-sm text-[--secondaryColor]">
              /What You’ll Get
            </h3>
            <h2 className="lg:text-5xl text-2xl font-bold my-3 text-center lg:text-start">
              Our Comprehensive Services
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="bg-[--darkBlueColor] p-6 rounded-lg flex flex-col lg:flex-row gap-5 ">
              <div className="w-full lg:w-[38%]">
                <Image
                  src="/assets/images/ic-youtube-editing.jpg"
                  width={300}
                  height={200}
                  alt="UI dev"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-full lg:w-[60%]">
                <h2 className="text-2xl text-white mb-4 font-bold">
                  UI/UX Development
                </h2>
                <p className="text-sm text-white mb-4">
                  Enhance the User Interface and Elevate the Product Experience.
                </p>

                <Button
                  title="Go To Page"
                  bgColor="#2CEE91"
                  hoverText="#343651"
                  icon="#fff"
                  btnLink="services/ui-development"
                />
              </div>
            </div>
            <div className="bg-[--darkBlueColor] p-6 rounded-lg flex flex-col lg:flex-row gap-5 ">
              <div className="w-full lg:w-[38%]">
                <Image
                  src="/assets/images/ic-sm-editing.jpg"
                  width={300}
                  height={200}
                  alt="UI dev"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-full lg:w-[60%]">
                <h2 className="text-2xl text-white mb-4 font-bold">
                  Web Development
                </h2>
                <p className="text-sm text-white mb-4">
                  Enhance the User Interface and Elevate the Product Experience.
                </p>
                <Button
                  title="Go To Page"
                  bgColor="#2CEE91"
                  hoverText="#343651"
                  icon="#fff"
                  btnLink="services/web-development"
                />
              </div>
            </div>
            <div className="bg-[--darkBlueColor] p-6 rounded-lg flex flex-col lg:flex-row gap-5 ">
              <div className="w-full lg:w-[38%]">
                <Image
                  src="/assets/images/ic-sm-editing.jpg"
                  width={300}
                  height={200}
                  alt="UI dev"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-full lg:w-[60%]">
                <h2 className="text-2xl text-white mb-4 font-bold">
                  Digital Marketing
                </h2>
                <p className="text-sm text-white mb-4">
                  Enhance the User Interface and Elevate the Product Experience.
                </p>
                <Button
                  title="Go To Page"
                  bgColor="#2CEE91"
                  hoverText="#343651"
                  icon="#fff"
                  btnLink="services/digital-marketing"
                />
              </div>
            </div>
            <div className="bg-[--darkBlueColor] p-6 rounded-lg flex flex-col lg:flex-row gap-5 8">
              <div className="w-full lg:w-[38%]">
                <Image
                  src="/assets/images/ic-sm-editing.jpg"
                  width={300}
                  height={200}
                  alt="UI dev"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-full lg:w-[60%]">
                <h2 className="text-2xl text-white mb-4 font-bold">
                  Video Editing
                </h2>
                <p className="text-sm text-white mb-4">
                  Enhance the User Interface and Elevate the Product Experience.
                </p>
                <Button
                  title="Go To Page"
                  bgColor="#2CEE91"
                  hoverText="#343651"
                  icon="#fff"
                  btnLink="services/video-editing"
                />
              </div>
            </div>
            <div className="bg-[--darkBlueColor] p-6 rounded-lg flex flex-col lg:flex-row gap-5 8">
              <div className="w-full lg:w-[38%]">
                <Image
                  src="/assets/images/ic-sm-editing.jpg"
                  width={300}
                  height={200}
                  alt="UI dev"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-full lg:w-[60%]">
                <h2 className="text-2xl text-white mb-4 font-bold">
                  Mobile App Development
                </h2>
                <p className="text-sm text-white mb-4">
                  Enhance the User Interface and Elevate the Product Experience.
                </p>
                <Button
                  title="Go To Page"
                  bgColor="#2CEE91"
                  hoverText="#343651"
                  icon="#fff"
                  btnLink="services/mobile-app-development"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
