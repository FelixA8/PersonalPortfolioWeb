import clsx from "clsx";
import BinusLogo from "./svg/binus-logo";
import Meteors from "./component-meteor";
import BgText from "./component.bgtext";

const EduHero = () => {
  return (
    <section className="pt-10 pb-16 mx-6">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <h4 className="font-semibold uppercase text-cyan-500 text-lg mb-3">
            Educational Background
          </h4>
          <h2 className="font-bold text-gray-300 text-3xl lg:text-[2rem]">
            Binus University
          </h2>
          <BinusLogo />
        </div>
        <div className="w-full mt-10 lg:w-1/2 relative">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-black border border-gray-800  px-8 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="flex flex-row justify-between w-full">
              <h2 className="text-3xl text-gray-300 lg:text-[2rem] mb-5">
                2022 - 2026
              </h2>
              <BgText
                bgColor="bg-green-700"
                bgTitle="Bachelor Degree"
                bgText=""
                showText={false}
              />
            </div>
            <BgText
              bgColor="bg-yellow-600"
              bgTitle="Major"
              bgText="Mobile Application and Technology, School of Computer Science"
              showText={true}
            />
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col">
                <BgText
                  bgColor="bg-blue-600"
                  bgTitle="Current GPA"
                  bgText="3.82"
                  showText={true}
                />
              </div>
              <div className="flex flex-col">
                <div className="inline-block mb-2">
                  <BgText
                    bgColor="bg-purple-700"
                    bgTitle="Current Semester"
                    bgText="4th Semester"
                    showText={true}
                  />
                </div>
              </div>
            </div>
            <Meteors number={20} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EduHero;
