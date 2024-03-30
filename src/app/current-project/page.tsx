import PastProject from "@/src/ui/section-project-hero";
import PastProjectList from "@/src/ui/section-project-list";

export default function Page() {
  return (
    <>
      <PastProject path={"/current-project"} />
      <PastProjectList path={"/current-project"} />
    </>
  );
}
