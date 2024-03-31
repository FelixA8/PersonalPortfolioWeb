import "../styles/globals.css";
import Hero from "../ui/section-hero";
import AboutMe from "../ui/section-about-me";
import Preview from "../ui/section-preview";

export default function Page() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Preview />
    </div>
  );
}
