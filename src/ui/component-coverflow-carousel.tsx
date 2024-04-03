import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "@/src/styles/globals.css";
import Image from "next/legacy/image";

const CarouselCoverFlow: React.FC<{ items: any }> = ({ items }) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {items.map((item: any) => (
        <SwiperSlide key={item.title}>
          <Image
            layout="fill"
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
