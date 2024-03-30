"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Keyboard,
  Pagination,
  Scrollbar,
  Zoom,
} from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { Project } from "../lib/project";

interface CarouselCardProps {
  cards: Project[];
  delay: number;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ cards, delay }) => {
  return (
    <Swiper
      className="swiper"
      modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: delay }}
      loop={true}
    >
      {cards.map((card) => (
        <SwiperSlide key={card.name} className="swiper-slide">
          <div className="flex px-1 flex-col w-full mx-auto lg:w-3/4 lg:mx-0">
            <div className="flex bg-gray-950 w-full h-2/3 rounded-lg border-white border overflow-hidden mb-3 shadow-cyan-500 shadow-md">
              <Image
                className="w-fit"
                width={2000000}
                height={2000000}
                src={card.image[0]}
                alt="project"
              />
            </div>
            <p className="text-gray-300 text-lg text-start">{card.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselCard;
