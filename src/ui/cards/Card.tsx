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
          `https://ofnlpbzjwclnxmqvwwlt.supabase.co/storage/v1/object/public/personalweb-storage/${link}`
        );
      }}
    >
      <div>
        <Image
          className="w-full h-56 object-cover"
          alt=""
          src={`https://ofnlpbzjwclnxmqvwwlt.supabase.co/storage/v1/object/public/personalweb-storage/${image}`}
          width={200}
          height={100}
        />
        <p className="font-normal text-lg text-center py-3 px-1">{name}</p>
      </div>
    </div>
  );
};

export default Card;
