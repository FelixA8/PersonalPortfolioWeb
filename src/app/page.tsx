import "../styles/globals.css";
import Hero from "../ui/section-hero";
import AboutMe from "../ui/section-about-me";
import Preview from "../ui/section-preview";
import CertificateSection from "../ui/section-certificate";
import CertificateModal from "../ui/component-certificatemodal";

export default function Page() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Preview />
      <CertificateSection />
    </div>
  );
}
