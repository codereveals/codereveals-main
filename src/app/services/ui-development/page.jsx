import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import Highlight from "@/components/Highlight";
import Image from "next/image";
import React from "react";

const UiDevelopmentPage = () => {
  return (
    <div>
      <div className="container">
        <HeroBreadcrumb
          title="UI/UX Development"
          desc="(UX) design for businesses. Describe how a well-designed UI and UX
            can improve customer satisfaction and drive conversions."
        />

        <div className="w-full my-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <h3 className=" text-sm text-[--secondaryColor]">
                /What You’ll Get
              </h3>
              <h2 className="lg:text-5xl text-2xl font-bold my-3 ">
                Our Comprehensive <br /> UI/UX Services
              </h2>
            </div>
            <div className="flex flex-col">
              <div className="bg-[--darkBlueColor] p-6 rounded-lg flex flex-col lg:flex-row gap-5 mb-8">
                <div className="w-full lg:w-[38%]">
                  <Image
                    src="/assets/images/ic-landing-page.jpg"
                    width={300}
                    height={200}
                    alt="UI dev"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-full lg:w-[60%]">
                  <h2 className="text-2xl text-white mb-4 font-bold">
                    Landing Page
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
              <div className="bg-[--darkBlueColor] p-6 rounded-lg flex flex-col lg:flex-row gap-5 mb-8">
                <div className="w-full lg:w-[38%]">
                  <Image
                    src="/assets/images/ic-logo-design.jpg"
                    width={300}
                    height={200}
                    alt="UI dev"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-full lg:w-[60%]">
                  <h2 className="text-2xl text-white mb-4 font-bold">
                    Logo Design
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
              <div className="bg-[--darkBlueColor] p-6 rounded-lg flex-col lg:flex-row flex gap-5 mb-8">
                <div className="w-full lg:w-[38%]">
                  <Image
                    src="/assets/images/ic-sm-post.jpg"
                    width={300}
                    height={200}
                    alt="UI dev"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-full lg:w-[60%]">
                  <h2 className="text-2xl text-white mb-4 font-bold">
                    Social Media Design
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
              <div className="bg-[--darkBlueColor] p-6 rounded-lg flex flex-col lg:flex-row gap-5 mb-8">
                <div className="w-full lg:w-[38%]">
                  <Image
                    src="/assets/images/ic-banner-post.jpg"
                    width={300}
                    height={200}
                    alt="UI dev"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-full lg:w-[60%]">
                  <h2 className="text-2xl text-white mb-4 font-bold">
                    Print Meida Design
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
    </div>
  );
};

export default UiDevelopmentPage;
