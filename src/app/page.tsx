import "../styles/globals.css";
import Hero from "../ui/section-hero";
import AboutMe from "../ui/section-about-me";
import Footer from "../ui/Footer";
import ParticlesComponent from "../ui/particles/ParticlesComponent";

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