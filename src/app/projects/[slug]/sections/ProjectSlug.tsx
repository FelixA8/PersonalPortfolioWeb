import Error from "next/error";
import { listProject, Project } from "../../../../lib/Projects";
import PaginationCarouselCard from "../../../../ui/cards/PaginationCarouselCard";
import BgText from "../../../../ui/text/BgText";
import Link from "next/link";

const ProjectSlug: React.FC<{ path: any }> = ({ path }) => {
  const words = path.split("/");
  const currPath = words[words.length - 1];
  const res = findProject(currPath);
  var project: Project;
  if (res === false) {
    return (
      <Error
        title={
          "Project " + path + " is not found. Please input the correct path."
        }
        statusCode={404}
      />
    );
  } else {
    project = res as Project;
  }

  return (
    <section className="pt-10 pb-16 mx-6">
      <div className="container mx-auto">
        <h4 className="font-semibold uppercase text-cyan-500 text-lg mb-3">
          Project Detail
        </h4>
        <h2 className="font-bold text-3xl mb-10 lg:text-[2rem] lg:pr-[4rem]">
          {project.name}
        </h2>
        <PaginationCarouselCard cards={project.image} />
        <p className="text-gray-300 mt-10 text-lg">{project.description}</p>
        <h4 className="font-semibold text-2xl mt-10">Created using:</h4>
        <ul className="flex flex-wrap mt-5 gap-2 lg:gap-5">
          {project.framework.map((code) => (
            <li key={code}>
              <BgText bgTitle={code} bgText="" showText={false} bgColor="" />
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col xl:flex-row w-full gap-2 lg:gap-5">
          <Link
            target="_blank"
            href={project.sourceLink}
            className={
              "text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-lg w-full xl:w-1/4 py-1 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            }
          >
            Source Code
          </Link>
          {project.publishLink !== "" && (
            <Link
              target="_blank"
              href={project.publishLink}
              className=" text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-lg w-full xl:w-1/4 py-1 text-center bg-green-600 hover:bg-green-700 focus:ring-green-800"
            >
              Preview
            </Link>
          )}
        </div>
        <h4 className="font-semibold text-2xl mt-10">Development duration:</h4>
        <p className="text-gray-300 mt-5 text-lg">{project.duration}</p>
      </div>
    </section>
  );
};

function findProject(currPath: string): Project | boolean {
    for (const project of listProject) {
      if (project.slug === currPath) {
        return project;
      }
    }

  return false;
}

export default ProjectSlug;
