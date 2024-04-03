"use client";
import { listCertificate } from "../lib/certificate";
import CarouselCoverFlow from "./component-coverflow-carousel";

const CertificateSection = () => {
  return (
    <section className="pb-16 pt-20 mx-6">
      <div className="container mx-auto">
        <h4 className="font-semibold uppercase text-cyan-500 text-lg mb-5 text-center">
          Certification
        </h4>
        <div className="w-full flex justify-center mt-14 md:mt-28 lg:mt-5">
          <CarouselCoverFlow items={listCertificate} />
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
