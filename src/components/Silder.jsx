"use client";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { portfolioSlider } from "@/utils/data";

const Silder = () => {
  console.log("...", portfolioSlider);
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {portfolioSlider?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Image
                src={item?.imageUrl}
                width={600}
                height={400}
                alt={item?.title}
                className="w-full rounded-lg"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Silder;
