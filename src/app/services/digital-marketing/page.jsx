import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import Highlight from "@/components/Highlight";
import Image from "next/image";
import React from "react";

const DigitalMarketingPage = () => {
  return (
    <>
      <div className="container">
        <HeroBreadcrumb
          title="Digital Marketing"
          desc="Introduce the digital marketing service company and its mission to help businesses grow and thrive in the digital landscape. Highlight the company's experience, expertise, and dedication to providing top-notch digital marketing solutions."
        />

        <div className="w-full my-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <h3 className=" text-sm text-[--secondaryColor]">
                /What You’ll Get
              </h3>
              <h2 className="text-5xl font-bold my-3 ">
                Our Comprehensive <br /> Digital Marketing Services
              </h2>
            </div>
            <div className="flex flex-col">
              <div className="bg-[--darkBlueColor] p-6 rounded-lg flex gap-5 mb-8">
                <div className="w-[38%]">
                  <Image
                    src="/assets/images/digital-markeing.webp"
                    width={300}
                    height={200}
                    alt="UI dev"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-[60%]">
                  <h2 className="text-2xl text-white mb-4 font-bold">
                    Search Engine Optimization
                  </h2>
                  <p className="text-sm text-white">
                    Mockup design is the process of creating visual
                    representations or prototypes of a digital product, such as
                    a website, mobile app, or software interface, to illustrate
                    its appearance, layout, and functionality before it is
                    developed.
                  </p>
                </div>
              </div>
              <div className="bg-[--darkBlueColor] p-6 rounded-lg flex gap-5 mb-8">
                <div className="w-[38%]">
                  <Image
                    src="/assets/images/digital-markeing.webp"
                    width={300}
                    height={200}
                    alt="UI dev"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-[60%]">
                  <h2 className="text-2xl text-white mb-4 font-bold">
                    Social Media Marketing
                  </h2>
                  <p className="text-sm text-white">
                    Mockup design is the process of creating visual
                    representations or prototypes of a digital product, such as
                    a website, mobile app, or software interface, to illustrate
                    its appearance, layout, and functionality before it is
                    developed.
                  </p>
                </div>
              </div>
              <div className="bg-[--darkBlueColor] p-6 rounded-lg flex gap-5 mb-8">
                <div className="w-[38%]">
                  <Image
                    src="/assets/images/digital-markeing.webp"
                    width={300}
                    height={200}
                    alt="UI dev"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-[60%]">
                  <h2 className="text-2xl text-white mb-4 font-bold">
                    Brand Marketing
                  </h2>
                  <p className="text-sm text-white">
                    Mockup design is the process of creating visual
                    representations or prototypes of a digital product, such as
                    a website, mobile app, or software interface, to illustrate
                    its appearance, layout, and functionality before it is
                    developed.
                  </p>
                </div>
              </div>
              <div className="bg-[--darkBlueColor] p-6 rounded-lg flex gap-5 mb-8">
                <div className="w-[38%]">
                  <Image
                    src="/assets/images/digital-markeing.webp"
                    width={300}
                    height={200}
                    alt="UI dev"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-[60%]">
                  <h2 className="text-2xl text-white mb-4 font-bold">
                    Ads Marketing
                  </h2>
                  <p className="text-sm text-white">
                    Mockup design is the process of creating visual
                    representations or prototypes of a digital product, such as
                    a website, mobile app, or software interface, to illustrate
                    its appearance, layout, and functionality before it is
                    developed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="my-10 lg:py-14">
          <Highlight />
        </section>
      </div>
    </>
  );
};

export default DigitalMarketingPage;
