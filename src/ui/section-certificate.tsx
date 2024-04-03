"use client"

import Image from "next/image";
import { listCertificate } from "../lib/certificate";
import CarouselCoverFlow from "./component-coverflow-carousel";

const CertificateSection = () => {
  return (
    <section className="pb-16 pt-20 mx-6">
      <div className="container mx-auto">
        <h4 className="font-semibold uppercase text-cyan-500 text-lg mb-5 mt-8 text-center lg:text-start">
          My Certificate
        </h4>
        <div className="w-full h-80">
          {/* <CarouselCoverFlow items={listCertificate} /> */}
          {listCertificate.map((certificate) => (
            <Image
              width={200}
              height={200}
              style={{ objectFit: "cover" }}
              alt="Certificate"
              src={
                "https://felix-personalweb-file-storage.s3.ap-southeast-1.amazonaws.com" +
                certificate.image
              }
            />
          ))}
        </div>
        <p className="text-center mt-20">End of page</p>
      </div>
    </section>
  );
};

export default CertificateSection;
