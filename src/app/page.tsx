import "../styles/globals.css";
import Hero from "../ui/section-hero";
import AboutMe from "../ui/section-about-me";
import Footer from "../ui/component-footer";
import ParticlesComponent from "../components/particles/ParticlesComponent";

export default function Page() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Footer />
      <ParticlesComponent />
    </div>
  );
}