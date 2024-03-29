import { pastExperiences } from "../lib/experience";
import TimelineCard from "./component-timeline-card";

const PastExperienceHero = () => {
  const listPastExperience = pastExperiences;
  return (
    <section className="pt-10 pb-16 mx-6">
      <div className="container mx-auto flex flex-col">
        <h4 className="font-semibold uppercase text-cyan-500 text-lg mb-3">
          Past Experience
        </h4>
        <p className="text-base text-gray-300 lg:text-lg mb-10">
          This section focuses on Felix's previous experience in events,
          organizations and volunteers.
        </p>
        <ol className="divide-y">
          {listPastExperience.map((experience) => (
            <div
              key={experience.experienceName}
              className="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
            >
              <li className="mb-10">
                <TimelineCard
                  events={experience.event}
                  experienceCommit={experience.experienceCommit}
                  experienceDate={experience.experienceDate}
                  experienceName={experience.experienceName}
                  experienceRole={experience.experienceRole}
                />
              </li>
            </div>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default PastExperienceHero;
