import Error from "next/error";
import { Project, listCurrentProject, listPastProject } from "../lib/project";
import PaginationCarouselCard from "./component-paginationcarousel";
import BgText from "./component.bgtext";

const PastProjectSlug: React.FC<{ path: any }> = ({ path }) => {

  const words = path.split("/");
  const parentPath = words[words.length - 2];
  const currPath = words[words.length - 1];
  const res = findProject(currPath, parentPath);
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
        <h4 className="font-semibold text-2xl mt-10">Development duration:</h4>
        <p className="text-gray-300 mt-5 text-lg">{project.duration}</p>
      </div>
    </section>
  );
};

function findProject(currPath: string, parentPath: string): Project | boolean {
  if (parentPath === "past-project") {
    for (const project of listPastProject) {
      if (project.slug === currPath) {
        return project;
      }
    }
  } else if (parentPath === "current-project") {
    for (const project of listCurrentProject) {
      if (project.slug === currPath) {
        return project;
      }
    }
  }

  return false;
}

export default PastProjectSlug;
