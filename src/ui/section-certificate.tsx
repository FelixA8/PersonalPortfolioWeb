import { listCertificate } from "../lib/certificate";
import CarouselCoverFlow from "./component-coverflow-carousel";

const CertificateSection = () => {
  return (
    <section className="pb-16 pt-20 mx-6">
      <div className="container mx-auto">
        <h4 className="font-semibold uppercase text-cyan-500 text-lg mb-5 mt-8 text-center lg:text-start">
          My Certificate
        </h4>
      </div>
      <CarouselCoverFlow items={listCertificate} /> 
    </section>
  );
};

export default CertificateSection;
