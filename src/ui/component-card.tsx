"use client"

import Image from "next/image";

const Card: React.FC<{ name: string; image: string; link: string }> = ({
  name,
  image,
  link,
}) => {
  return (
    <div
    className="max-w-[20rem] bg-black border-gray-700 border overflow-hidden rounded-md hover:cursor-pointer hover:border-white hover:-translate-y-1 hover:shadow-cyan-500 hover:shadow-md transition duration-300"
      onClick={():void => {
        window.open(
          `https://felix-personalweb-file-storage.s3.ap-southeast-1.amazonaws.com${link}`
        );
      }}
    >
      <div>
        <Image
          className="w-full h-56 object-cover"
          alt=""
          src={`https://felix-personalweb-file-storage.s3.ap-southeast-1.amazonaws.com${image}`}
          width={200}
          height={100}
        />
        <p className="font-normal text-lg text-center py-3 px-1">{name}</p>
      </div>
    </div>
  );
};

export default Card;
