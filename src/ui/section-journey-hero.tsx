"use client";

import ParticlesComponent from "./component-particles";
import Particles from "./component-particles";

const JourneyHero = () => {
  return (
    <section className="pt-10 pb-16 mx-6">
      <div className="container mx-auto">
        <h4 className="font-semibold uppercase text-cyan-500 text-lg mb-10">
          My Journey
        </h4>
        <div className="flex flex-wrap gap-[5%]">
          <div className="w-full lg:w-[45%] mb-10 py-32 xl:w-[30%] bg-gray-800 rounded-lg">
            <p className="text-center text-3xl font-bold">Web Development</p>
          </div>
          <div className="w-full lg:w-[45%] mb-10 py-32 xl:w-[30%] bg-gray-800 rounded-lg">
            <p className="text-center text-3xl font-bold">Android Development</p>
          </div>
          <div className="w-full lg:w-[45%] mb-10 py-32 xl:w-[30%] bg-gray-800 rounded-lg">
            <p className="text-center text-3xl font-bold">Other</p>
          </div>
        </div>
      </div>
      <ParticlesComponent />
    </section>
  );
};

export default JourneyHero;
