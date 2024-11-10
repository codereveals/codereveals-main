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
          desc="Tailored software solutions to streamline your business operations, enhance productivity, and meet your unique needs."
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
                  src="/assets/images/ui-development.jpg"
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
                  src="/assets/images/web-development.jpg"
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
                  Creating custom, responsive websites that offer an engaging
                  user experience, optimized for performance and SEO.
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
                  src="/assets/images/digital-marketing.jpg"
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
                  Boost your online visibility and drive organic traffic with
                  targeted SEO strategies and high-quality content.
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
                  src="/assets/images/video-editing.jpg"
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
                  Transform raw footage into captivating videos with seamless
                  transitions, color correction, and audio enhancements.
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
                  src="/assets/images/mobile-app-development.jpg"
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
                  Building high-quality, feature-rich mobile apps for iOS and
                  Android, tailored to meet your business needs and user
                  preferences.
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
