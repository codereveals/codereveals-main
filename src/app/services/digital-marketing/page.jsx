import Button from "@/components/Button";
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
              <h2 className="text-2xl lg:text-5xl font-bold my-3 ">
                Our Comprehensive <br /> Digital Marketing Services
              </h2>
            </div>
            <div className="flex flex-col">
              <div className="bg-[--darkBlueColor] p-6 rounded-lg flex flex-col lg:flex-row gap-5 mb-8">
                <div className="w-full lg:w-[38%]">
                  <Image
                    src="/assets/images/ic-seo.jpg"
                    width={300}
                    height={200}
                    alt="UI dev"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-full lg:w-[60%]">
                  <h2 className="text-2xl text-white mb-4 font-bold">
                    Search Engine Optimization
                  </h2>
                  <p className="text-sm text-white">
                    Optimizing website content, meta tags, and HTML structure to
                    improve search engine rankings and user experience. Building
                    high-quality backlinks and managing brand mentions to boost
                    your website`s authority and visibility.
                  </p>
                </div>
              </div>
              <div className="bg-[--darkBlueColor] p-6 rounded-lg flex-col lg:flex-row flex gap-5 mb-8">
                <div className="w-full lg:w-[38%]">
                  <Image
                    src="/assets/images/ic-smo.jpg"
                    width={300}
                    height={200}
                    alt="UI dev"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-full lg:w-[60%]">
                  <h2 className="text-2xl text-white mb-4 font-bold">
                    Social Media Marketing
                  </h2>
                  <p className="text-sm text-white">
                    Developing a customized social media plan to enhance brand
                    awareness and foster audience engagement across platforms.
                    Creating engaging posts, stories, and videos tailored for
                    different social media platforms to keep your audience
                    active and connected.
                  </p>
                </div>
              </div>
              <div className="bg-[--darkBlueColor] p-6 rounded-lg flex-col lg:flex-row flex gap-5 mb-8">
                <div className="w-full lg:w-[38%]">
                  <Image
                    src="/assets/images/ic-brand-marketing.jpg"
                    width={300}
                    height={200}
                    alt="UI dev"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-ful lg:w-[60%]">
                  <h2 className="text-2xl text-white mb-4 font-bold">
                    Brand Marketing
                  </h2>
                  <p className="text-sm text-white">
                    Crafting a unique brand identity and positioning strategy
                    that resonates with your target audience and differentiates
                    you from competitors. Developing compelling brand narratives
                    and marketing campaigns that connect emotionally with
                    customers and build long-term loyalty.
                  </p>
                </div>
              </div>
              <div className="bg-[--darkBlueColor] p-6 rounded-lg flex-col lg:flex-row flex gap-5 mb-8">
                <div className="w-full lg:w-[38%]">
                  <Image
                    src="/assets/images/ic-ads-marketing.jpg"
                    width={300}
                    height={200}
                    alt="UI dev"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-full lg:w-[60%]">
                  <h2 className="text-2xl text-white mb-4 font-bold">
                    Ads Marketing
                  </h2>
                  <p className="text-sm text-white">
                    Drive targeted traffic and increase conversions with
                    strategic pay-per-click advertising on Google, optimized for
                    your business goals. Create effective ad campaigns on
                    platforms like Facebook, Instagram, and LinkedIn to boost
                    engagement and reach your ideal audience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-3 flex-col flex lg:flex-row gap-5">
          <div className="w-full lg:w-[60%]">
            <h2 className="font-bold mb-5 text-xl lg:text-2xl">
              Transforming Businesses with Exceptional Digital Marketing
              Services
            </h2>
            <p className="mb-5">
              Introduce the digital marketing service company and its mission to
              help businesses grow and thrive in the digital landscape.
              Highlight the company`s experience, expertise, and dedication to
              providing top-notch digital marketing solutions.
            </p>
            <h2 className="font-bold mb-5 text-xl lg:text-2xl">
              Included Services
            </h2>
            <ul className="my-6 pl-5 border-l border-teal-600 ">
              <li className="mb-3 text-[--doplyColor]">Grow Business</li>
              <li className="mb-3 text-[--doplyColor]">
                24/7 Alltime Supporting
              </li>
              <li className="mb-3 text-[--doplyColor]">
                Improve Digital Presence
              </li>
              <li className="mb-3 text-[--doplyColor]">Expert Team Members</li>
            </ul>

            <h2 className="font-bold mb-5 text-xl lg:text-2xl">
              Services Offered
            </h2>

            <p className="mb-5">
              The company offers a range of digital marketing services tailored
              to clients` needs. These include search engine optimization (SEO)
              to boost online visibility and drive organic traffic, and
              pay-per-click (PPC) advertising campaigns that deliver targeted
              results. Content marketing strategies engage and convert audiences
              through valuable, high-quality content. Social media marketing
              campaigns enhance brand visibility and foster customer
              relationships. Email marketing strategies create personalized
              campaigns that nurture leads and drive sales. Influencer marketing
              connects brands with influencers to amplify reach and engagement.
            </p>

            <h2 className="font-bold mb-5 text-xl lg:text-2xl">
              Key Features of the Company
            </h2>

            <p className="mb-5">
              The company boasts an expert team of experienced web developers,
              designers, and digital strategists working together to deliver
              exceptional results. Its client-centric approach focuses on
              understanding client`s goals and working closely with them to
              achieve their vision. A proven track record of successful projects
              and satisfied clients demonstrates the company`s expertise and
              reliability. The company provides ongoing support and maintenance
              to ensure websites continue to perform optimally.
            </p>

            <h2 className="font-bold mb-5 text-xl lg:text-2xl">Benefits</h2>

            <p className="mb-5">
              The company`s custom strategies are designed to align with each
              client`s unique goals and objectives. Its multi-channel approach
              ensures a comprehensive digital presence across various platforms.
              Proven results and success stories demonstrate the company`s
              ability to deliver tangible outcomes for clients. The company
              offers ongoing support and optimization to continuously improve
              marketing efforts and achieve sustained success.
            </p>

            <h2 className="font-bold mb-5 text-xl lg:text-2xl">
              Client Success Stories
            </h2>

            <p className="mb-5">
              Share testimonials from satisfied clients or case studies of
              successful campaigns to showcase the company`s impact on clients``
              businesses.
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

export default DigitalMarketingPage;
