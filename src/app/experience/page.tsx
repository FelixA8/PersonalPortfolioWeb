import PastExperienceHero from "@/src/ui/section-pastexp-hero";
import { experiences } from "../../lib/experience";
import TimelineCard from "../../ui/component-timeline-card";

export default function Page() {
  return (
    <>
      <section className="pt-10 pb-16 mx-6">
      <div className="container mx-auto flex flex-col">
        <h4 className="font-semibold uppercase text-cyan-500 text-lg mb-3">
          My Experience
        </h4>
        <p className="text-base text-gray-300 lg:text-lg mb-10">
          This section focuses on my experiences.
        </p>
        <ol className="divide-y">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="p-5 mb-4 border  rounded-lg bg-gray-800 border-gray-700"
            >
              <li className="mb-10">
                <TimelineCard
                  events={experience.event}
                  experienceCommit={experience.experienceCommit}
                  experienceDate={experience.experienceDate}
                  experienceName={experience.experienceName}
                  experienceRole={experience.experienceRole}
                  experienceDescription=""
                />
              </li>
            </div>
          ))}
        </ol>
      </div>
    </section>
    </>
  );
}
