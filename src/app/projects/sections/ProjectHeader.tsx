const ProjectHeader: React.FC<{ path: string }> = ({ path }) => {
    let title = "Projects"
    return (
      <section className="pt-10 mx-6">
        <div className="container mx-auto flex flex-wrap ">
          <div className="w-full">
            <h4 className="font-semibold uppercase text-cyan-500 text-lg mb-3">
              {title}
            </h4>
          </div>
        </div>
      </section>
    );
  };
  
  export default ProjectHeader;
  