import "../styles/globals.css";
import Hero from "../ui/section-hero";
import AboutMe from "../ui/section-about-me";
import Preview from "../ui/section-preview";
import CertificateSection from "../ui/component-certificate";
import Footer from "../ui/component-footer";
import ParticlesComponent from "../ui/component-particles";

export default function Page() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Preview />
      <CertificateSection />
      <Footer />
      <ParticlesComponent />
    </div>
  );
}
