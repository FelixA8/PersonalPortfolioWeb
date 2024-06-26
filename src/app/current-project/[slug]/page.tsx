"use client";
import PastProjectSlug from "@/src/ui/section-projectslug";
import { usePathname, useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = usePathname();
  
  return <>
    <PastProjectSlug path={searchParams} />
  </>;
};

export default Page;
