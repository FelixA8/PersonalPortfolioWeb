const PastProject: React.FC<{ path: string }> = ({ path }) => {
  var title = ""
  var description = ""
  if(path === "/past-project") {
    title = "Past Project"
    description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis aliquam harum nisi officia eaque exercitationem quos, quibusdamomnis earum officiis vitae suscipit iste maiores eligendi saepe dolore necessitatibus dicta maxime doloribus odit, consequuntur a! Omnis doloribus reiciendis quis laborum enim?"
  } else if(path === "/current-project") {
    title = "Current Project"
    description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quae placeat ipsam deserunt quas amet veritatis vitae distinctio voluptatibus nostrum aliquam accusantium nemo beatae eum fugiat porro ad a sit cum, quis adipisci incidunt sapiente assumenda. Error inventore incidunt optio!"
  }
  return (
    <section className="pt-10 pb-16 mx-6">
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

export default PastProject;
