import { listCurrentProject, listPastProject } from "../lib/project";
import "swiper/css";
import Image from "next/image";
import BgText from "./component.bgtext";
import Link from "next/link";

const Preview = () => {
  const pastProject = listPastProject;
  return (
    <section className="pb-16 pt-8 px-6">
      <div className="container mx-auto">
        <h4 className="font-semibold uppercase text-cyan-500 text-lg mb-5 mt-8 text-center lg:text-start">
          My Finished Project
        </h4>
        {pastProject.map((project, index) => {
          if (true) {
            return (
              <div
                key={project.name}
                className={
                  "w-full mb-16 flex flex-wrap " +
                  (index % 2 !== 0 && "flex-row-reverse")
                }
              >
                <div className="w-full xl:w-1/3 border overflow-hidden rounded-lg border-gray-700 mb-5 xl:mb-0">
                  <Image
                    className="w-fit"
                    src={
                      "https://felix-personalweb-file-storage.s3.ap-southeast-1.amazonaws.com" +
                      project.image[0]
                    }
                    width={20000}
                    height={20000}
                    alt="f"
                  />
                </div>
                <div
                  className={
                    (index % 2 !== 0 && "xl:items-end") +
                    " w-full xl:w-2/3 xl:px-10 flex flex-col mb-10"
                  }
                >
                  <h4 className="text-xl lg:text-3xl xl:text-[2rem] font-bold">
                    {project.name}
                  </h4>
                  <p className="text-gray-300 mt-3">Created using:</p>
                  <ul className="flex flex-wrap mt-2 gap-2 xl:gap-5">
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
                  <div
                    className={
                      " flex flex-wrap mt-5 gap-5 w-full " +
                      (index % 2 !== 0 && "xl:justify-end")
                    }
                  >
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
                </div>
              </div>
            );
          }
        })}
        <p className="text-gray-300 text-center mt-5">
          <span className="opacity-40">See more projects on </span>{" "}
          <Link
            href={"/past-project"}
            className="text-white hover:cursor-pointer hover:text-gray-100"
          >
            project section
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Preview;
