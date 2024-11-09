import Button from "@/components/Button";
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
              <h2 className="text-2xl lg:text-5xl font-bold my-3 ">
                Our Comprehensive <br /> Web Development Services
              </h2>
            </div>
            <div className="flex flex-col">
              <div className="bg-[--darkBlueColor] p-6 rounded-lg flex-col lg:flex-row flex gap-5 mb-8">
                <div className="w-full lg:w-[38%]">
                  <Image
                    src="/assets/images/ic-custom-web.jpg"
                    width={300}
                    height={200}
                    alt="UI dev"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-full lg:w-[60%]">
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
              <div className="bg-[--darkBlueColor] p-6 rounded-lg flex flex-col lg:flex-row gap-5 mb-8">
                <div className="w-fulll lg:w-[38%]">
                  <Image
                    src="/assets/images/ic-wordpress.jpg"
                    width={300}
                    height={200}
                    alt="UI dev"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-full lg:w-[60%]">
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
              <div className="bg-[--darkBlueColor] p-6 rounded-lg flex flex-col lg:flex-row gap-5 mb-8">
                <div className="w-full lg:w-[38%]">
                  <Image
                    src="/assets/images/ic-cms-dev.jpg"
                    width={300}
                    height={200}
                    alt="UI dev"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-full lg:w-[60%]">
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
              <div className="bg-[--darkBlueColor] p-6 rounded-lg flex-col lg:flex-row flex gap-5 mb-8">
                <div className="w-full lg:w-[38%]">
                  <Image
                    src="/assets/images/ic-react-dev.jpg"
                    width={300}
                    height={200}
                    alt="UI dev"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-full lg:w-[60%]">
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

        <div className="py-3 flex-col flex lg:flex-row gap-5">
          <div className="w-full lg:w-[60%]">
            <h2 className="font-bold mb-5 text-xl lg:text-2xl">
              Leading the Way in Website Development Services
            </h2>
            <p className="mb-5">
              Introduce the website development company and its mission.
              Highlight the company's experience, reputation, and commitment to
              delivering top-quality web development services.
            </p>
            <h2 className="font-bold mb-5 text-xl lg:text-2xl">
              Included Services
            </h2>
            <ul className="my-6 pl-5 border-l border-teal-600 ">
              <li className="mb-3 text-[--doplyColor]">
                Mobile-Friendly Design
              </li>
              <li className="mb-3 text-[--doplyColor]">
                24/7 Alltime Supporting
              </li>
              <li className="mb-3 text-[--doplyColor]">
                Page Speed Optimization
              </li>
              <li className="mb-3 text-[--doplyColor]">Expert Team Members</li>
            </ul>

            <h2 className="font-bold mb-5 text-xl lg:text-2xl">
              Services Offered
            </h2>

            <p className="mb-5">
              Custom website development offers tailored web development
              solutions that cater to clients' unique needs and brand
              identities. Responsive design creates websites that function
              seamlessly on all devices and screen sizes. E-commerce development
              builds secure, user-friendly, and optimized online stores. Content
              management systems (CMS) expertise includes platforms such as
              WordPress, Joomla, and Drupal, with customization for clients'
              needs. Web application development creates advanced web
              applications for businesses with custom features and
              functionalities.
            </p>

            <h2 className="font-bold mb-5 text-xl lg:text-2xl">
              Key Features of the Company
            </h2>

            <p className="mb-5">
              The company boasts an expert team of experienced web developers,
              designers, and digital strategists working together to deliver
              exceptional results. Its client-centric approach focuses on
              understanding clients' goals and working closely with them to
              achieve their vision. A proven track record of successful projects
              and satisfied clients demonstrates the company's expertise and
              reliability. The company provides ongoing support and maintenance
              to ensure websites continue to perform optimally.
            </p>

            <h2 className="font-bold mb-5 text-xl lg:text-2xl">Benefits</h2>

            <p className="mb-5">
              Innovative solutions keep the company ahead of industry trends and
              incorporate innovative technologies into its web development
              projects. SEO optimization designs websites with search engine
              optimization in mind, helping clients improve their online
              visibility and rankings. Transparent communication keeps clients
              informed throughout the development process. Timely delivery
              ensures projects are completed on time and within budget.
            </p>

            <h2 className="font-bold mb-5 text-xl lg:text-2xl">
              Client Success Stories
            </h2>

            <p className="mb-5">
              Share testimonials from satisfied clients or case studies of
              successful projects to showcase the company's impact on clients'
              businesses. Include a call to action inviting readers to contact
              the company for a consultation or more information about its
              services.
            </p>
          </div>

          <div className="w-full lg:w-[38%]">
            <div className="w-full rounded-md p-7 bg-[--doplyColor]">
              <h2 className="text-slate-800 text-xl py-3 font-bold text-center">
                Need Help?
              </h2>

              <p className="text-slate-900 text-center">
                Speak with a human to filling out a form? <br /> call corporate
                office and we will connect.
              </p>

              <h2 className="font-bold text-5xl text-black py-5 text-center">
                +91-8447059088
              </h2>
              <a
                href=""
                className="underline block text-center  text-slate-600"
              >
                info@codereveals.com
              </a>
              <div className="text-center my-4">
                <Button
                  title="Contact Us"
                  bgColor="#fff"
                  hoverText="#343651"
                  icon="#2CEE91"
                />
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
