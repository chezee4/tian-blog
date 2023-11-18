import { Shield } from "lucide-react";
import Image from "next/image";
import bgIntro from "@/app/img/intro.png";

const Intro = () => {
  return (
    <section className=" relative w-full h-[36rem] md:h-[50rem] flex flex-col items-center justify-center">
      <div className="absolute -z-10 w-full h-full">
        <Image
          className="object-cover w-full h-full"
          src={bgIntro}
          alt="intro"
          fill
        />
      </div>
      <div className=" max-w-[1120px] mt-12 px-4">
        <h3 className="text-white text-[24px] sm:text-[36px] lg:text-[48px] text-center font-semibold mb-[2.5rem]">
          Kaleb Lechtenberg
        </h3>
        <h5 className="text-white text-[20px] sm:text-[36px] lg:text-[48px] font-bold mb-[3.75rem] text-center leading-[120%] tracking-[-1px]">
          &quot; Working with this freelancer has been great. His attention to
          detail is unparalleled and finished all work ahead of schedule. Will
          gladly send more work and I do not hesitate to recommend him to you on
          your project also.&quot;
        </h5>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="86"
        viewBox="0 0 72 86"
        fill="none"
        
      >
        <path
          d="M71.0158 10.6128C49.7908 10.6128 35.9486 0 35.9486 0C35.9486 0 22.1064 10.6128 1.06636 10.6128C1.06636 10.6128 -1.33295 44.281 1.06636 55.9915C3.2811 66.9702 35.9486 86 35.9486 86C35.9486 86 68.6164 66.9702 71.0158 55.9915C73.2303 44.4637 71.0158 10.6128 71.0158 10.6128Z"
          fill="white"
        />
      </svg>
    </section>
  );
};

export default Intro;
