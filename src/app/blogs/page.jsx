import Button from "@/components/Button";
import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import Image from "next/image";
import React from "react";

const BlogsPage = () => {
  return (
    <>
      <section className="container">
        <HeroBreadcrumb
          title="Our Blogs"
          subTitle="What we write?"
          desc="Introduce the digital marketing service company and its mission to help businesses grow and thrive in the digital landscape. Highlight the company's experience, expertise, and dedication to providing top-notch digital marketing solutions."
        />

        <div className="w-full my-6 lg:my-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="w-full flex flex-col">
              <figure>
                <Image
                  src="/assets/images/blogs/blog-1.webp"
                  width={600}
                  height={400}
                  alt="blogs"
                  className="w-full h-full rounded-md"
                />
              </figure>
              <div className="my-4">
                <p className="text-[--secondaryColor]">/ 5 April, 2024</p>
                <h2 className="text-2xl lg:text-3xl my-6 font-bold hover:text-[--secondaryColor]  transition-all delay-100">
                  Blockchain Buzz: Exploring the Future of Finance, NFTs, and
                  Beyond
                </h2>
                <Button
                  title="Continue Reading"
                  bgColor="#2CEE91"
                  hoverText="#343651"
                  icon="#fff"
                  btnLink="services/mobile-app-development"
                />
              </div>
            </div>
            <div className="w-full flex flex-col">
              <figure>
                <Image
                  src="/assets/images/blogs/blog-2.webp"
                  width={600}
                  height={400}
                  alt="blogs"
                  className="w-full h-full rounded-md"
                />
              </figure>
              <div className="my-4">
                <p className="text-[--secondaryColor]">/ 5 April, 2024</p>
                <h2 className="text-2xl lg:text-3xl my-6 font-bold hover:text-[--secondaryColor]  transition-all delay-100">
                  Demystifying Cybersecurity: Protect Your Business with Expert
                  Insights.
                </h2>
                <Button
                  title="Continue Reading"
                  bgColor="#2CEE91"
                  hoverText="#343651"
                  icon="#fff"
                  btnLink="services/mobile-app-development"
                />
              </div>
            </div>
            <div className="w-full flex flex-col">
              <figure>
                <Image
                  src="/assets/images/blogs/blog-3.webp"
                  width={600}
                  height={400}
                  alt="blogs"
                  className="w-full h-full rounded-md"
                />
              </figure>
              <div className="my-4">
                <p className="text-[--secondaryColor]">/ 5 April, 2024</p>
                <h2 className="text-2xl lg:text-3xl my-6 font-bold hover:text-[--secondaryColor]  transition-all delay-100">
                  Cloud Chronicles: Trends, Strategies, and Innovations in Cloud
                  Computing
                </h2>
                <Button
                  title="Continue Reading"
                  bgColor="#2CEE91"
                  hoverText="#343651"
                  icon="#fff"
                  btnLink="services/mobile-app-development"
                />
              </div>
            </div>
            <div className="w-full flex flex-col">
              <figure>
                <Image
                  src="/assets/images/blogs/blog-4.webp"
                  width={600}
                  height={400}
                  alt="blogs"
                  className="w-full h-full rounded-md"
                />
              </figure>
              <div className="my-4">
                <p className="text-[--secondaryColor]">/ 5 April, 2024</p>
                <h2 className="text-2xl lg:text-3xl my-6 font-bold hover:text-[--secondaryColor]  transition-all delay-100">
                  Connecting the World: Exploring IoT`s Impact Across Industries
                  and Security Challenges
                </h2>
                <Button
                  title="Continue Reading"
                  bgColor="#2CEE91"
                  hoverText="#343651"
                  icon="#fff"
                  btnLink="services/mobile-app-development"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsPage;
