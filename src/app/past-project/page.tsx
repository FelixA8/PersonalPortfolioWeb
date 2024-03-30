import PastProject from "@/src/ui/section-project-hero";
import PastProjectList from "@/src/ui/section-project-list";

export default function Page() {
  return (
    <>
      <PastProject path={"/past-project"}/>
      <PastProjectList path={"/past-project"}/>
    </>
  );
}
