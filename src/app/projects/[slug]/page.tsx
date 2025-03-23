"use client";
import { usePathname, useSearchParams } from "next/navigation";
import ProjectSlug from "./sections/ProjectSlug";

const Page = () => {
  const searchParams = usePathname();
  console.log(searchParams);
  return (
    <>
      <ProjectSlug path={searchParams} />
    </>
  );
};

export default Page;