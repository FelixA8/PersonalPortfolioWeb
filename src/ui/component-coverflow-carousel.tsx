"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "@/src/styles/globals.css";
import Image from "next/image";

const CarouselCoverFlow: React.FC<{ items: any }> = ({ items }) => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true, bulletClass: `swiper-pagination-bullet` }}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {items.map((item: any) => (
        <SwiperSlide key={item.title}>
          <Image
            fill={true}
            objectFit="cover"
            alt="Certificate"
            src={
              "https://felix-personalweb-file-storage.s3.ap-southeast-1.amazonaws.com" +
              item.image
            }
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselCoverFlow;
