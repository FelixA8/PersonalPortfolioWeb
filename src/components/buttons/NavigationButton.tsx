import Link from "next/link";
import React from "react";

const ButtonLink: React.FC<{url: string, title: string}> = ({url, title}) => {
    return <Link
    target="_blank"
    href={url}
    className="  text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
  >
    Preview CV
  </Link>
}