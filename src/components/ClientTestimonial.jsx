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
        slidesPerView={3}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
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
