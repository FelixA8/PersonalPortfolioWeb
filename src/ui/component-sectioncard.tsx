import ExpoLogo from "../../public/svg/expo-logo";
import FlutterLogo from "../../public/svg/flutter-logo";
import GitHubLogo from "../../public/svg/github";
import KotlinLogo from "../../public/svg/kotlin-logo";
import MySQLLogo from "../../public/svg/mysql-logo";
import NextJSLogo from "../../public/svg/next-logo";
import NodeJSLogo from "../../public/svg/nodejs-logo";
import ReactJSLogo from "../../public/svg/react";
import TailwindLogo from "../../public/svg/tailwind";
import TypeScriptLogo from "../../public/svg/typescript";
import VercelLogo from "../../public/svg/vercel";
import WebLogo from "../../public/svg/web-logo";

interface JounneyProps {
  name: string;
  description: string;
  logo: string;
}

const SectionCard: React.FC<JounneyProps> = ({ name, description, logo }) => {
  var picture;
  if (logo === "Web Logo") {
    picture = <WebLogo />;
  } else if (logo === "Kotlin Logo") {
    picture = <KotlinLogo />;
  } else if (logo === "NodeJS Logo") {
    picture = <NodeJSLogo />;
  } else if (logo === "GitHub Logo") {
    picture = <GitHubLogo />;
  } else if (logo === "React Logo") {
    picture = <ReactJSLogo />;
  } else if (logo === "Tailwind Logo") {
    picture = <TailwindLogo />;
  } else if (logo === "NextJS Logo") {
    picture = <NextJSLogo />;
  } else if (logo === "TypeScript Logo") {
    picture = <TypeScriptLogo />;
  } else if (logo === "Flutter Logo") {
    picture = <FlutterLogo />;
  } else if (logo === "MySQL Logo") {
    picture = <MySQLLogo />;
  } else if (logo === "Vercel Logo") {
    picture = <VercelLogo />;
  } else if (logo === "Expo Logo") {
    picture = <ExpoLogo />
  } else {
    picture = <div></div>;
  }
  return (
    <div className="p-5 mb-4 border  rounded-lg bg-gray-800 border-gray-700 flex flex-wrap items-center gap-5">
      <div className="w-20">{picture}</div>
      <div className="flex flex-col ">
        <p className="font-medium  text-white">{name}</p>
        <p className="text-gray-400 font-semibold">{description}</p>
      </div>
    </div>
  );
};

export default SectionCard;
