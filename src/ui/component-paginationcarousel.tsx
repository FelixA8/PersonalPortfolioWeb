import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

interface CarouselCardProps {
  cards: string[];
}

const PaginationCarouselCard: React.FC<CarouselCardProps> = ({ cards }) => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="lg:w-3/4"
    >
      {cards.map((card) => (
        <SwiperSlide key={card} className="swiper-slide bottom-6 pt-6">
          <div className="flex flex-col w-full mx-auto items-center">
            <div className="flex bg-gray-950 w-full h-2/3 rounded-lg border border-gray-700 overflow-hidden mb-3">
              <Image
                className="w-fit"
                width={2000000}
                height={2000000}
                src={"https://felix-personalweb-file-storage.s3.ap-southeast-1.amazonaws.com" + card}
                alt="project"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PaginationCarouselCard;
