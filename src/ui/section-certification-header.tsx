import { listCertificate } from "../lib/certificate";
import Card from "./cards/Card";

const SectionCertificateHeader = () => {
  return (
    <section className="pt-10 pb-16 mx-6">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <h4 className="font-semibold text-center md:text-start uppercase text-cyan-500 text-lg mb-3">
            MY CERTIFICATION
          </h4>
        </div>
        <div className="flex justify-center w-full md:justify-start">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {listCertificate.map((certificate) => (
              <Card
                key={certificate.title}
                image={certificate.image}
                link={certificate.preview}
                name={certificate.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCertificateHeader;
