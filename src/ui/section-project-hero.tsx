const ProjectHeader: React.FC<{ path: string }> = ({ path }) => {
  var title = ""
  var description = ""
  if(path === "/past-project") {
    title = "Past Project"
    description = "This section describes my previous projects that has been created. Feel free to check the project and the source code :D"
  } else if(path === "/current-project") {
    title = "Current Project"
    description = "This section shows my current projects that I'm working on! Of course this is just some projects that I can publically show. There are others that are still in secret 🤫"
  }
  return (
    <section className="pt-10 mx-6">
      <div className="container mx-auto flex flex-wrap ">
        <div className="w-full">
          <h4 className="font-semibold uppercase text-cyan-500 text-lg mb-3">
            {title}
          </h4>
          <p className="text-base text-gray-300 lg:text-lg mb-10">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectHeader;
