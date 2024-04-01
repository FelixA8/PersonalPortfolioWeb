import { ongoingExperiences } from "../lib/experience";
import TimelineCard from "./component-timeline-card";

const OngoingExperienceHero = () => {
  const listOngoingExperience = ongoingExperiences;
  return (
    <section className="pt-10 pb-16 mx-6">
      <div className="container mx-auto flex flex-col">
        <h4 className="font-semibold uppercase text-cyan-500 text-lg mb-3">
          Ongoing Experience
        </h4>
        <p className="text-base text-gray-300 lg:text-lg mb-10">
          This section focuses on Felix's current status in events,
          organizations and volunteers.
        </p>
        <ol className="divide-y">
          {listOngoingExperience.map((experience) => (
            <div
              key={experience.experienceName}
              className="p-5 mb-4 border  rounded-lg  bg-gray-800 border-gray-700"
            >
              <li>
                <TimelineCard
                  events={experience.event}
                  experienceCommit={experience.experienceCommit}
                  experienceDate={experience.experienceDate}
                  experienceName={experience.experienceName}
                  experienceRole={experience.experienceRole}
                  experienceDescription={experience.experienceDescription}
                />
              </li>
            </div>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default OngoingExperienceHero;
