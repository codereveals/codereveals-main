import Button from "@/components/Button";
import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import Highlight from "@/components/Highlight";
import Image from "next/image";
import React from "react";

const MobileAppPage = () => {
  return (
    <>
      <div className="container">
        <HeroBreadcrumb
          subTitle="Why us for Mobile?"
          title="Mobile App Development"
          desc="Creating tailored mobile apps for iOS and Android, built with robust features and user-centric design to enhance your business presence."
        />

        <div className="w-full my-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <h3 className=" text-sm text-[--secondaryColor]">
                /What You’ll Get
              </h3>
              <h2 className="text-2xl lg:text-5xl font-bold my-3 ">
                Our Comprehensive <br /> Mobile App Development Services
              </h2>
            </div>
            <div className="flex flex-col">
              <div className="bg-[--darkBlueColor] p-6 rounded-lg flex flex-col lg:flex-row gap-5 mb-8">
                <div className="w-full lg:w-[38%]">
                  <Image
                    src="/assets/images/ic-react-native.jpg"
                    width={300}
                    height={200}
                    alt="UI dev"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-full lg:w-[60%]">
                  <h2 className="text-2xl text-white mb-4 font-bold">
                    React Native Development
                  </h2>
                  <p className="text-sm text-white">
                    uilding high-performance, native-like mobile applications
                    for both iOS and Android using React Native, ensuring a
                    consistent experience across devices. Creating intuitive,
                    visually appealing user interfaces and seamless user
                    experiences tailored to your brand and target audience.
                  </p>
                </div>
              </div>
              <div className="bg-[--darkBlueColor] p-6 rounded-lg flex-col lg:flex-row flex gap-5 mb-8">
                <div className="w-full lg:w-[38%]">
                  <Image
                    src="/assets/images/ic-flutter.jpg"
                    width={300}
                    height={200}
                    alt="UI dev"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-full lg:w-[60%]">
                  <h2 className="text-2xl text-white mb-4 font-bold">
                    Flutter Development
                  </h2>
                  <p className="text-sm text-white">
                    Building fast, natively compiled applications for iOS,
                    Android, and the web using Flutter, ensuring a seamless user
                    experience across platforms. Crafting beautiful, highly
                    responsive user interfaces that provide a smooth and
                    engaging experience, leveraging Flutter’s powerful design
                    capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-3 flex-col flex lg:flex-row gap-5">
          <div className="w-full lg:w-[60%]">
            <h2 className="font-bold mb-5 text-xl lg:text-2xl">
              Elevating Your Business with Expert Mobile Development Services
            </h2>
            <p className="mb-5">
              Introduce the mobile development service company and its mission
              to help businesses excel in the mobile landscape. Highlight the
              company`s experience, expertise, and dedication to providing
              top-notch mobile app solutions.
            </p>
            <h2 className="font-bold mb-5 text-xl lg:text-2xl">
              Included Services
            </h2>
            <ul className="my-6 pl-5 border-l border-teal-600 ">
              <li className="mb-3 text-[--doplyColor]">
                Mobile-App Development
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
              The company offers a wide range of mobile development services
              tailored to clients` needs. Native app development creates apps
              specifically for a particular operating system, such as Android or
              iOS, delivering optimal performance and user experience.
              Cross-platform app development uses frameworks like React Native
              or Flutter to create apps that run seamlessly on multiple
              platforms, saving time and resources. Progressive web apps (PWAs)
              combine web and mobile app features, offering offline capabilities
              and push notifications without requiring downloads from an app
              store.
            </p>

            <h2 className="font-bold mb-5 text-xl lg:text-2xl">
              App Testing and Quality Assurance
            </h2>

            <p className="mb-5">
              The company prioritizes app testing and quality assurance to
              ensure apps function smoothly across different devices and
              operating systems. Testing includes performance, compatibility,
              security, and usability checks to provide a seamless user
              experience.
            </p>

            <h2 className="font-bold mb-5 text-xl lg:text-2xl">
              App Maintenance and Support
            </h2>

            <p className="mb-5">
              After an app is launched, the company provides maintenance and
              support services to keep it up-to-date and performing optimally.
              This includes updates for new operating system versions, bug
              fixes, and new features based on user feedback
            </p>

            <h2 className="font-bold mb-5 text-xl lg:text-2xl">
              Client Success Stories
            </h2>

            <p className="mb-5">
              Share testimonials from satisfied clients or case studies of
              successful campaigns to showcase the company`s impact on clients`
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

export default MobileAppPage;
