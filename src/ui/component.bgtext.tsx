function BgText({
  bgColor,
  bgTitle,
  bgText,
  showText,
}: {
  bgColor: string;
  bgTitle: string;
  bgText: string;
  showText: boolean;
}) {
  var colorSelector = "";
  if (bgColor === "") {
    colorSelector = setBgColor(bgTitle);
  }

  return (
    <>
      <div className="inline-block mb-2 z-30">
        <div
          className={` ${
            bgTitle === "Firebase" ||
            bgTitle === "JavaScript" ||
            bgTitle === "NodeJS"
              ? "text-gray-900"
              : "text-white"
          } ${
            bgColor === "" ? colorSelector : bgColor
          } py-1 px-2 rounded-sm flex items-center font-semibold`}
        >
          <p className="m-0 text-sm xl:text-md">{bgTitle}</p>
        </div>
      </div>
      {showText && (
        <p className="text-md text-gray-300 xl:text-lg mb-5">{bgText}</p>
      )}
    </>
  );
}

function setBgColor(bgTitle: string): string {
  if (bgTitle === "Flutter Framework") {
    return "bg-[#02569B]";
  } else if (bgTitle === "Dart") {
    return "bg-[#02569B]";
  } else if (bgTitle === "React Framework") {
    return "bg-[#1c2c4c]";
  } else if (bgTitle === "HTML") {
    return "bg-[#E44D26]";
  } else if (bgTitle === "CSS" || bgTitle === "Tailwind CSS") {
    return "bg-[#264de4]";
  } else if (bgTitle === "JavaScript") {
    return "bg-[#F7DF1E]";
  } else if (bgTitle === "NodeJS") {
    return "bg-[#68A063]";
  } else if (bgTitle === "NextJS") {
    return "bg-[#212121]";
  } else if (bgTitle === "MySQL") {
    return "bg-[#00758F]";
  } else if (bgTitle === "Typescript") {
    return "bg-[#007ACC]";
  } else if (bgTitle === "Firebase") {
    return "bg-[#FFCA28]";
  }
  return "";
}

export default BgText;
