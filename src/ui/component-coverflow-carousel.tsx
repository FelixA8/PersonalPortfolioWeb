"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "@/src/styles/globals.css";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const CarouselCoverFlow: React.FC<{ items: any }> = ({ items }) => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={2}
      coverflowEffect={{
        rotate: 10,
        stretch: 50,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      modules={[EffectCoverflow]}
      className="mySwiper lg:scale-100 scale-150"
    >
      {items.map((item: any) => (
        <SwiperSlide key={item.image} className="!flex !justify-center">
          <Image
          className="cursor-pointer"
          onClick={():void => {window.open(`https://felix-personalweb-file-storage.s3.ap-southeast-1.amazonaws.com${item.preview}`)}}
          width={480}
          height={357}
          alt="Certificate Image"
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
