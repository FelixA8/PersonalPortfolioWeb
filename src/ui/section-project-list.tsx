import Image from "next/image";
import { Project, listCurrentProject, listPastProject } from "../lib/project";
import BgText from "./component.bgtext";
import Link from "next/link";

const PastProjectList: React.FC<{ path: string }> = ({ path }) => {
  var selectedProject = null;
  var href = "";
  if (path === "/past-project") {
    href = "/past-project";
    selectedProject = listPastProject;
  } else if (path === "/current-project") {
    href = "/current-project";
    selectedProject = listCurrentProject;
  }
  return (
    <>
      <section className="pb-16 mx-6">
        <ul className="container mx-auto flex flex-wrap gap-5 ">
          {selectedProject!.length > 0 && selectedProject!.map((project) => (
            <li
              key={project.name}
              className="w-full lg:w-[45%] xl:w-[30%]  bg-black rounded-md border-[3px] border-gray-700 cursor-pointer hover:border-white hover:-translate-y-1 hover:shadow-cyan-500 hover:shadow-md transition duration-300"
            >
              <Link href={href + `/${project.slug}`}>
                <div className="flex flex-col w-full mx-auto lg:mx-0">
                  <Image
                    className="w-fit"
                    width={2000000}
                    height={2000000}
                    src={project.image[0]}
                    alt="project"
                  />
                  <p className="text-gray-300 text-xl text-start font-semibold py-3 px-3 border-t border-gray-700">
                    {project.name}
                  </p>
                  <ul className="flex flex-wrap py-3 px-3 gap-2">
                    {project.framework.map((code) => (
                      <li key={code}>
                        <BgText
                          bgTitle={code}
                          bgText=""
                          showText={false}
                          bgColor=""
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default PastProjectList;
