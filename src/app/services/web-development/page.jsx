import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import Highlight from "@/components/Highlight";
import Image from "next/image";
import React from "react";

const WebDevelopmentPage = () => {
  return (
    <>
      <div className="container">
        <HeroBreadcrumb
          title="Web Development"
          desc="Introduce the website development company and its mission. Highlight the company's experience, reputation, and commitment to delivering top-quality web development services"
        />

        <div className="w-full my-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <h3 className=" text-sm text-[--secondaryColor]">
                /What You’ll Get
              </h3>
              <h2 className="text-5xl font-bold my-3 ">
                Our Comprehensive <br /> Web Development Services
              </h2>
            </div>
            <div className="flex flex-col">
              <div className="bg-[--darkBlueColor] p-6 rounded-lg flex gap-5 mb-8">
                <div className="w-[38%]">
                  <Image
                    src="/assets/images/web-development.webp"
                    width={300}
                    height={200}
                    alt="UI dev"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-[60%]">
                  <h2 className="text-2xl text-white mb-4 font-bold">
                    Custom Web Development
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
                    src="/assets/images/web-development.webp"
                    width={300}
                    height={200}
                    alt="UI dev"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-[60%]">
                  <h2 className="text-2xl text-white mb-4 font-bold">
                    Wordpress Development
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
                    src="/assets/images/web-development.webp"
                    width={300}
                    height={200}
                    alt="UI dev"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-[60%]">
                  <h2 className="text-2xl text-white mb-4 font-bold">
                    CMS Development
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
                    src="/assets/images/mockup.webp"
                    width={300}
                    height={200}
                    alt="UI dev"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-[60%]">
                  <h2 className="text-2xl text-white mb-4 font-bold">
                    React Development
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

export default WebDevelopmentPage;
