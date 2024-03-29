import clsx from "clsx";
import BinusLogo from "./svg/binus-logo";

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

function BgText({
  bgColor,
  bgTitle,
  bgText,
  showText,
}: {
  bgColor: string;
  bgTitle: string;
  bgText: string;
  showText: boolean;
}) {
  return (
    <>
      <div className="inline-block mb-2 z-30">
        <div
          className={` text-gray-300 ${bgColor} py-1 px-2 rounded-sm flex items-center`}
        >
          <p className="m-0 text-sm xl:text-lg">{bgTitle}</p>
        </div>
      </div>
      {showText && (
        <p className="text-lg text-gray-300 xl:text-lg  mb-5">{bgText}</p>
      )}
    </>
  );
}

const Meteors = ({ number }: { number?: number }) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={clsx(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent"
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        ></span>
      ))}
    </>
  );
};

export default EduHero;
