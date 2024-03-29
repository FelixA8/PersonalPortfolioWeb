import { Event } from "../lib/experience";

interface ExperienceProps {
  experienceDate: string;
  experienceRole: string;
  experienceName: string;
  experienceCommit: number;
  events: Event[];
}

const TimelineCard: React.FC<ExperienceProps> = ({
  experienceName,
  events,
  experienceCommit,
  experienceDate,
  experienceRole,
}) => {
  return (
    <>
      <time className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex">
        {experienceDate}
      </time>
      <div className="text-gray-600 dark:text-gray-400">
        <div className="flex mb-5">
          <div className="text-base font-normal">
            <span className="font-medium text-gray-900 dark:text-white">
              {experienceRole}
            </span>{" "}
            of{" "}
            <span className="font-medium text-gray-900 dark:text-white">
              {experienceName}
            </span>{" "}
            committed in{" "}
            <span className="font-medium text-gray-900 dark:text-white">
              {" "}
              {experienceCommit} events
            </span>
          </div>
        </div>
        <ol className="relative border-s ml-2">
          {events.map((event) => (
            <li key={event.name} className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 bg-gray-300 ring-gray-800"></span>
              <div className="text-sm text-white font-medium">{event.name}</div>
              <div className="text-sm font-normal">
                {event.date} - {event.location}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default TimelineCard;
