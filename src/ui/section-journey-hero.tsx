import Link from "next/link";
import { listJourneys } from "../lib/journey";
import ParticlesComponent from "../components/particles/ParticlesComponent";
import Particles from "../components/particles/ParticlesComponent";
import AndroidLogo from "../../public/svg/android-logo";
import GitHubLogo from "../../public/svg/github";
import NodeJSLogo from "../../public/svg/nodejs-logo";
import WebLogo from "../../public/svg/web-logo";

const JourneyHero: React.FC<{ path: string }> = ({ path }) => {
  return (
    <section className="pt-10 pb-16 mx-6">
      <div className="container mx-auto">
        <h4 className="font-semibold uppercase text-cyan-500 text-lg mb-10">
          My Journey
        </h4>
        <ul className="flex flex-wrap gap-[5%]">
          {listJourneys.map((journey) => {
            var logo;
            if (journey.journey.thumbnailPicture === "Web Logo") {
              logo = <WebLogo />;
            } else if (journey.journey.thumbnailPicture === "Android Logo") {
              logo = <AndroidLogo />;
            } else if (journey.journey.thumbnailPicture === "NodeJS Logo") {
              logo = <NodeJSLogo />;
            } else if (journey.journey.thumbnailPicture === "GitHub Logo") {
              logo = <GitHubLogo />;
            } else {
              logo = <div></div>;
            }
            return (
              <Link
                href={path + `/${journey.journey.slug}`}
                key={journey.journey.thumbnailTitle}
                className="relative w-full lg:w-[45%] mb-10 py-32 xl:w-[30%] bg-gray-800 rounded-lg items-center justify-center"
              >
                <div className="absolute inset-0 w-full lg:w-full opacity-30 scale-[0.3] z-40 lg:scale-[0.35]">
                  {logo}
                </div>
                <p className="text-center text-3xl font-bold text-gray-100 px-5">
                  {journey.journey.thumbnailTitle}
                </p>
              </Link>
            );
          })}
        </ul>
      </div>
      <ParticlesComponent />
    </section>
  );
};

export default JourneyHero;
