import { listCurrentProject, listPastProject } from "../lib/project";
import "swiper/css";
import CarouselCard from "./component-carousel-card";


const Preview = () => {
  const currentProject = listCurrentProject;
  const pastProject = listPastProject;
  return (
    <section className="pb-16 pt-20 bg-gray-950 px-6">
      <div className="container mx-auto flex flex-wrap gap">
        <div className="w-full lg:w-1/2 mb-8">
          <h4 className="font-semibold uppercase text-cyan-500 text-lg mb-3 text-center lg:text-start">
            Current Project
          </h4>
          <CarouselCard cards={currentProject} delay={4000} />
        </div>
        <div className="w-full lg:w-1/2">
          <h4 className="font-semibold uppercase text-cyan-500 text-lg mb-3 text-center lg:text-start">
            Past Project
          </h4>
          <CarouselCard cards={pastProject} delay={3000}/>
        </div>
      </div>
    </section>
  );
};

export default Preview;
