import ProjectHeader from "@/src/ui/section-project-hero";
import PastProjectList from "@/src/ui/section-project-list";

export default function Page() {
  return (
    <>
      <ProjectHeader path={"/past-project"}/>
      <PastProjectList path={"/past-project"}/>
    </>
  );
}
