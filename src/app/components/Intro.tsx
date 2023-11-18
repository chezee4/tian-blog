import { Shield } from "lucide-react";
import Image from "next/image";
import bgIntro from "@/app/img/intro.png";

const Intro = () => {
  return (
    <section className="my-[7rem] mx-0 md:my-4 p-6 w-full h-full bg-intro bg-center bg-no-repeat flex flex-col items-center justify-center">
      <div className="absolute -z-10 w-full h-full">
        <Image
          className="object-cover w-full h-4/5 p-12"
          src={bgIntro}
          alt="intro"
          fill
        />
      </div>
      <h3 className="text-white text-3xl font-semibold mb-[3.75rem]">
        Kaleb Lechtenberg
      </h3>
      <h5 className="text-white text-3xl font-bold mb-[3.75rem] text-center">
        Working with this freelancer has been great. His attention to detail is
        unparalleled and finished all work ahead of schedule. Will gladly send
        more work and I do not hesitate to recommend him to you on your project
        also.
      </h5>
      <Shield className="w-[5.75rem] h-[5.75rem]" />
    </section>
  );
};

export default Intro;
