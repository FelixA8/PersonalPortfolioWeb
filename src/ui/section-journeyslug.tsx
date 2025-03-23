import Error from "next/error";
import { Journey, listJourneys } from "../lib/journey";
import SectionCard from "./cards/SectionCard";

const JourneySlug: React.FC<{ path: any }> = ({ path }) => {
  const words = path.split("/");
  const currPath = words[words.length - 1];
  const res = findProject(currPath);
  var journey: Journey;
  if (res === false) {
    return (
      <Error
        title={
          "Journey " + path + " is not found. Please input the correct path."
        }
        statusCode={404}
      />
    );
  } else {
    journey = res as Journey;
  }
  return (
    <section className="pt-10 pb-16 mx-6">
      <div className="container mx-auto">
        <h4 className="font-semibold uppercase text-cyan-500 text-lg mb-3">
          Journey Detail
        </h4>
        <h2 className="font-bold text-3xl mb-10 lg:text-[2rem] lg:pr-[4rem]">
          {journey.thumbnailTitle}
        </h2>
        <p className="text-gray-300 mt-10 mb-10 text-lg">
          {journey.description}
        </p>
        <h4 className="font-semibold uppercase text-cyan-500 text-lg mb-5">
          What Have I learned?
        </h4>
        <ul>
          {journey.timelineSection.map((section) => (
            <li key={section.title}>
              <SectionCard
                name={section.title}
                description={section.description}
                logo={section.logo}
                key={section.title}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default JourneySlug;

function findProject(currPath: string): Journey | boolean {
  for (const journey of listJourneys) {
    if (journey.journey.slug === currPath) {
      return journey.journey;
    }
  }
  return false;
}
