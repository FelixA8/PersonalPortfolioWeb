import ListContact from "./ListContact";

const AboutMe = () => {
  return (
    <section className="pb-16 pt-20 mx-6">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <h4 className="font-semibold uppercase text-cyan-500 text-lg mb-3">
            About Me
          </h4>
          <h2 className="font-bold xl:text-3xl mb-5 lg:text-2xl lg:pr-[4rem]">
            Ontrack as a Developer
          </h2>
          <p className="text-base text-gray-300 lg:text-lg lg:pr-[4rem]">
            An enthusiastic and aspiring developer with expertise in web and app development. Committed to
            continuous learning and staying adaptable in the ever-evolving tech industry. Possesses strong soft skills,
            including leadership and teamwork, and is eager to contribute to impactful projects that solve real-world
            problems and help others.

          </p>
        </div>
        <div className="w-full mt-10 lg:w-1/2">
          <h2 className="font-bold text-3xl mb-5 lg:text-2xl lg:pr-[4rem]">
            Let's be friend!
          </h2>
          <p className="text-base text-gray-300 lg:text-lg lg:pr-[4rem] mb-5">
            Get to know me from my social media.
          </p>
          <ListContact />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
