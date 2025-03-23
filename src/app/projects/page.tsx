import ProjectHeader from "./sections/ProjectHeader";
import ProjectList from "./sections/ProjectList";

export default function Page() {
  return (
    <>
      <ProjectHeader path={"/project"}/>
      <ProjectList path={"/project"}/>
    </>
  );
}
