import Button from "@/components/Button";
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
          subTitle="Creative Mind "
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
                    Creating visually appealing, high-converting landing pages
                    tailored to your brand, designed to capture leads or drive
                    specific actions. Ensuring that your landing page is fully
                    responsive, providing a seamless experience on both desktop
                    and mobile devices.
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
                    Crafting unique and memorable logos that reflect your
                    brand`s identity, values, and vision, setting you apart in
                    your industry. Designing logos that align with your overall
                    brand strategy, ensuring consistency across all marketing
                    materials and platforms.
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
                    Social Media Post
                  </h2>
                  <p className="text-sm text-white">
                    Creating eye-catching and engaging social media post designs
                    that align with your brand`s identity, capture attention,
                    and encourage user interaction. Each design is tailored to
                    the platform`s requirements, using bold visuals, thoughtful
                    typography, and effective use of color to convey your
                    message clearly and creatively.
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
                    Banner Design
                  </h2>
                  <p className="text-sm text-white">
                    Designing striking banners that effectively communicate your
                    message, attract attention, and align with your brand`s
                    identity. Whether for digital or print, each banner is
                    crafted with the right blend of visuals, typography, and
                    color schemes to ensure it stands out.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-3 flex-col flex lg:flex-row gap-5">
          <div className="w-full lg:w-[60%]">
            <h2 className="font-bold mb-5 text-xl lg:text-2xl">
              Best User Interface and User Experience Services
            </h2>
            <p className="mb-5">
              Explain the importance of user interface (UI) and user experience
              (UX) design for businesses. Describe how a well-designed UI and UX
              can improve customer satisfaction and drive conversions.
            </p>
            <h2 className="font-bold mb-5 text-xl lg:text-2xl">
              Included Services
            </h2>
            <ul className="pl-5 border-l border-teal-600 ">
              <li className="mb-3 text-[--doplyColor]">
                Creative Trending Design
              </li>
              <li className="mb-3 text-[--doplyColor]">
                24/7 Alltime Supporting
              </li>
              <li className="mb-3 text-[--doplyColor]">
                Industry Standard Design
              </li>
              <li className="mb-3 text-[--doplyColor]">Expert Team Members</li>
            </ul>

            <h2 className="font-bold mb-5 text-xl lg:text-2xl">
              Importance of UI and UX
            </h2>

            <p className="mb-5">
              Discuss why UI and UX are critical for businesses of all sizes and
              industries. Explain how a seamless and intuitive user experience
              can enhance user engagement and retention. Highlight the benefits
              of a well-designed interface, such as increased conversion rates
              and customer loyalty.
            </p>

            <h2 className="font-bold mb-5 text-xl lg:text-2xl">
              Characteristics of the Best UI/UX Services
            </h2>

            <p className="mb-5">
              Expertise in the field ensures quality designs that align with
              industry standards. Customization tailors solutions to meet
              specific business needs. User-centric design prioritizes the
              preferences and needs of end users. Accessibility ensures designs
              are inclusive for all users, including those with disabilities.
              Responsive design guarantees compatibility across various devices
              and screen sizes.
            </p>

            <h2 className="font-bold mb-5 text-xl lg:text-2xl">
              Top UI/UX Services and Providers
            </h2>

            <p className="mb-5">
              Provide a list of top UI/UX service providers and explain their
              strengths and unique offerings. Offer tips for selecting the best
              UI/UX service provider, considering factors such as budget,
              portfolio, client testimonials, and industry experience.
            </p>

            <h2 className="font-bold mb-5 text-xl lg:text-2xl">
              The Future of UI/UX
            </h2>

            <p className="mb-5">
              Discuss emerging trends in UI/UX design, such as voice-activated
              interfaces, augmented reality (AR), and virtual reality (VR).
              Provide insights into how these trends may impact the future of
              user interface and user experience design.Include a clear call to
              action encouraging readers to learn more or contact a professional
              service provider for their UI/UX needs.
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
    </div>
  );
};

export default UiDevelopmentPage;
