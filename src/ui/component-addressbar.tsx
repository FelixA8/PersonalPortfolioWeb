"use client";

import React, { Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function Params() {
  const searchParams = useSearchParams();

  return searchParams!.toString().length !== 0 ? (
    <div className="px-2 text-gray-500">
      <span>?</span>
      {Array.from(searchParams!.entries()).map(([key, value], index) => {
        return (
          <React.Fragment key={key}>
            {index !== 0 ? <span>&</span> : null}
            <span className="px-1">
              <span
                key={key}
                className="animate-[highlight_1s_ease-in-out_1] text-gray-100"
              >
                {key}
              </span>
              <span>=</span>
              <span
                key={value}
                className="animate-[highlight_1s_ease-in-out_1] text-gray-100"
              >
                {value}
              </span>
            </span>
          </React.Fragment>
        );
      })}
    </div>
  ) : null;
}

export function AddressBar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex items-center gap-x-2 mx-3 lg:mx-6 lg:py-3">
      <div className="text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="flex gap-x-1 text-sm font-medium">
        <div>
          <span className="text-gray-400">.com{pathname}</span>
        </div>

        <Suspense>
          <Params />
        </Suspense>
      </div>
    </div>
  );
}
