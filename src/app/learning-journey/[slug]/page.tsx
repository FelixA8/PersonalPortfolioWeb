"use client";
import JourneySlug from "@/src/ui/section-journeyslug";
import PastProjectSlug from "@/src/ui/section-projectslug";
import { usePathname, useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = usePathname();
  return <>
    <JourneySlug path={searchParams} />
  </>;
};

export default Page;
