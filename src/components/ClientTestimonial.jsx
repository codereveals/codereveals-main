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
import { clientTestimonial } from "@/utils/data";
import Clientcard from "./Clientcard";

const ClientTestimonial = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        // slidesPerView={3}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={3000}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          576: {
            width: 576,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 1,
          },
          992: {
            width: 992,
            slidesPerView: 2,
          },
          1280: {
            width: 1280,
            slidesPerView: 3,
          },
        }}
      >
        {clientTestimonial?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Clientcard props={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ClientTestimonial;
