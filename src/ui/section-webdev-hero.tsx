import Link from "next/link";
import CircularProgressBar from "./component-circular-progression";
import AmazonS3Icon from "./svg/awss3";
import GitHubLogo from "./svg/github";
import NextJSLogo from "./svg/next-logo";
import ReactJSLogo from "./svg/react";
import TailwindLogo from "./svg/tailwind";
import TypeScriptLogo from "./svg/typescript";
import VercelLogo from "./svg/vercel";
import GoogleCloudIcon from "./svg/cloud-console";

const WebDevHero = () => {
  return (
    <section className="pt-10 pb-16 mx-6">
      <div className="container mx-auto">
        <h4 className="font-semibold uppercase text-cyan-500 text-lg mb-10">
          Web Profile
        </h4>
        <div className="flex flex-wrap gap-[5%] gap-y-10">
          <div className="w-full xl:w-[70%] shadow-lg bg-black shadow-gray-900 flex flex-col p-5 rounded-xl justify-center">
            <h3 className="font-semibold uppercase text-white text-xl mb-10 text-center xl:text-start">
              Created with:
            </h3>
            <div className="flex flex-wrap justify-around gap-7 lg:justify-between">
              <div className="w-20 xl:w-[6rem]">
                <NextJSLogo />
                <p className="text-center mt-5 font-light text-lg">Next.js</p>
              </div>
              <div className="w-20 xl:w-[6rem]">
                <TypeScriptLogo />
                <p className="text-center mt-5 font-light text-lg">
                  TypeScript
                </p>
              </div>
              <div className="w-20 xl:w-[6rem]">
                <ReactJSLogo />
                <p className="text-center mt-5 font-light text-lg">React JS</p>
              </div>
              <div className="w-20 xl:w-[6rem]">
                <TailwindLogo />
                <p className="text-center mt-5 font-light text-lg">Tailwind</p>
              </div>
              <div className="w-20 xl:w-[6rem]">
                <AmazonS3Icon />
                <p className="text-center mt-5 font-light text-lg">AWS S3</p>
              </div>
              <div className="w-20 xl:w-[6rem]">
                <GoogleCloudIcon />
                <p className="text-center mt-5 font-light text-lg">Cloud</p>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[25%] shadow-lg bg-black shadow-gray-900 flex flex-col items-center justify-center py-10 rounded-xl">
            <CircularProgressBar percentage={100} />
            <h3 className="font-semibold uppercase text-white text-xl mb-3 mt-10">
              Website Peformance
            </h3>
            <p className="font-light">by LightHouse</p>
          </div>
          <div className="w-full xl:w-[30%] shadow-lg bg-black shadow-gray-900 flex flex-col items-center justify-center p-5 rounded-xl">
            <h3 className="font-semibold uppercase text-white text-xl text-center xl:text-start mb-10">
              Hosted With:
            </h3>
            <div className="w-20 xl:w-[8rem] xl:h-[8rem]">
              <VercelLogo />
            </div>
            <p className="text-center mt-5 font-light text-lg">Vercel</p>
          </div>
          <div className="w-full xl:w-[35%] flex flex-col justify-between gap-10">
            <div className="w-full justify-center xl:justify-center shadow-lg bg-black shadow-gray-900 flex flex-wrap items-center gap-5 p-10 rounded-xl">
              <div className="w-10 xl:w-[3rem] xl:h-[3rem]">
                <GitHubLogo />
              </div>
              <h3 className="font-semibold uppercase text-white text-xl">
                Stored in GitHub
              </h3>
              <a
                target="_blank"
                href="https://github.com/FelixA8/PersonalPortfolioWeb"
                className="px-2 py-3 text-[#01242a] bg-cyan-500 rounded-md hover:bg-cyan-600 transition duration-300"
              >
                <p className="text-sm font-semibold tracking-wider">
                  See Repository
                </p>
              </a>
            </div>
            <div className="w-full shadow-lg bg-black shadow-gray-900 flex flex-col items-center justify-center p-10 rounded-xl">
              <h3 className="font-semibold uppercase text-white text-xl">
                Created in 2024 by Felix Anderson
              </h3>
            </div>
          </div>
          <div className="w-full xl:w-[25%] shadow-lg bg-black shadow-gray-900 flex flex-col items-center justify-center p-5 rounded-xl">
            <p className="text-center font-light text-lg">Powered by React Framework</p>
            <p className="text-center mt-5 font-light text-lg">High Efficiency</p>
            <p className="text-center mt-5 font-light text-lg">Dynamic Code</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevHero;
