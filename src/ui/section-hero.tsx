import Image from "next/image";

const Hero = () => {
    return <section className="pt-10 pb-16 mx-6">
    <div className="container mx-auto flex flex-wrap items-center">
      <div className="w-full lg:w-1/2">
        <p className="text-gray-300 tracking-wide lg:text-2xl mb-2">
          Greetings 👋, my name is
        </p>
        <h1 className="text-cyan-500 font-semibold text-3xl tracking-wide mb-2 lg:text-5xl">
          Felix Anderson
        </h1>
        <p className="text-gray-300 text-xl tracking-wide mb-5 lg:text-2xl">
          Student | Developer
        </p>
        <p className="text-gray-300 text-base tracking-wide mb-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          expedita deleniti consequuntur. Maiores earum eveniet sunt ab cumque
          minus architecto.
        </p>
        <button className="px-6 py-3 text-xl bg-cyan-500 hover:bg-cyan-800 rounded-lg text-slate-100 transition duration-300 font-bold mb-5">
          Contact me
        </button>
      </div>
      <div className="w-full lg:w-1/2 self-end">
        <div className="relative mt-10 lg:mt-9 lg:right-0">
          <Image
            src="/img/profile.png"
            className="max-w-full mx-auto lg:scale-75 xl:scale-125"
            width="300"
            height="300"
            alt="Felix"
          />
          <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 lg:scale-75 xl:scale-125">
            <svg
              width="400"
              height="400"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#06b6d4"
                d="M51,-42.5C62.1,-26.7,64.4,-5.8,61.3,16.3C58.1,38.4,49.5,61.7,32.5,71.3C15.5,81,-9.9,77.1,-32.7,66.6C-55.5,56.2,-75.8,39,-77.9,20.4C-80.1,1.8,-64.2,-18.3,-48.2,-35.2C-32.2,-52.1,-16.1,-65.7,1.9,-67.3C19.9,-68.8,39.9,-58.3,51,-42.5Z"
                transform="translate(100 100)"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </section>;
}

export default Hero