import MeteorCard from "@/src/ui/cards/MeteorCard";
import BinusLogo from "../../../../public/svg/binus-logo";

const EduHero = () => {
  return (
    <section className="pt-10 pb-16 mx-6">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <h4 className="font-semibold uppercase text-cyan-500 text-lg mb-3">
            Educational Background
          </h4>
          <h2 className="font-bold text-gray-300 text-3xl lg:text-[2rem]">
            Binus University
          </h2>
          <BinusLogo />
        </div>
        <MeteorCard />
      </div>
    </section>
  );
};

export default EduHero;
