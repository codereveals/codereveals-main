import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import Highlight from "@/components/Highlight";
import Image from "next/image";
import React from "react";

const VideoEditingPage = () => {
  return (
    <>
      <div className="container">
        <HeroBreadcrumb
          title="Video Editing"
          desc="Creating polished and engaging videos through professional editing techniques, including trimming, color correction, audio enhancement, and seamless transitions. Whether it's for promotional content, social media, or personal projects, the focus is on delivering high-quality visuals and sound that captivate the audience. Custom edits such as adding motion graphics, special effects, and animations can be incorporated to make your video stand out and convey your message effectively."
        />

        <div className="w-full my-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <h3 className=" text-sm text-[--secondaryColor]">
                /What You’ll Get
              </h3>
              <h2 className="text-2xl lg:text-5xl font-bold my-3 ">
                Our Comprehensive <br /> Video Editing Services
              </h2>
            </div>
            <div className="flex flex-col">
              <div className="bg-[--darkBlueColor] p-6 rounded-lg flex-col lg:flex-row flex gap-5 mb-8">
                <div className="w-fulll lg:w-[38%]">
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
                    Youtube Video Editing
                  </h2>
                  <p className="text-sm text-white">
                    Specializing in YouTube video editing to create
                    high-quality, engaging content that enhances your channel`s
                    performance. This includes trimming, adding transitions,
                    improving audio, and adjusting the color for a professional
                    look. Custom thumbnails, titles, and intros are also
                    designed to increase click-through rates and improve viewer
                    retention.
                  </p>
                </div>
              </div>
              <div className="bg-[--darkBlueColor] p-6 rounded-lg flex flex-col lg:flex-row gap-5 mb-8">
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
                    Social Media Video
                  </h2>
                  <p className="text-sm text-white">
                    Creating dynamic and engaging social media videos that are
                    optimized for platforms like Instagram, TikTok, Facebook,
                    and YouTube Shorts. The focus is on fast-paced editing,
                    incorporating eye-catching visuals, trendy effects, and
                    captivating captions to capture attention quickly. Videos
                    are formatted and tailored for each platform`s specific
                    requirements, ensuring they stand out in users`` feeds.
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

export default VideoEditingPage;
