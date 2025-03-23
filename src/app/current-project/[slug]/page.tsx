"use client";
import { usePathname, useSearchParams } from "next/navigation";
import ProjectSlug from "../../projects/[slug]/sections/ProjectSlug";

const Page = () => {
  const searchParams = usePathname();
  
  return <>
    <ProjectSlug path={searchParams} />
  </>;
};

export default Page;
