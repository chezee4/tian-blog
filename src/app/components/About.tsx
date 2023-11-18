import about1 from "@/app/img/about1.jpg";
import about2 from "@/app/img/about2.jpg";
import about3 from "@/app/img/about3.jpg";
import ZigZag from "@/app/img/Zig Zag.svg";
import Image from "next/image";

const About = () => {
  return (
    <section className="mt-[8.5rem] mb-[10rem] sm:mb-[14rem] max-w">
      <div className="w-full grid  gap-6 md:gap-0 ">
        <div className="flex flex-col md:flex-row w-full gap-6 md:gap-0  ">
          <div className=" md:flex-[0_0_50%] md:mb-[5rem] md:pr-3 ">
            <h3 className="uppercase whitespace-nowrap  text-[2.5rem] sm:text-[4rem] mb-[4rem] font-bold inline-flex gap-4">
              About me
              <Image src={ZigZag} alt="ZigZag" className=" hidden xl:block dark:invert-0 invert" />
            </h3>
            <p className=" text-xl md:text-[clamp(22px,_2vw,_36px)] leading-[100%] text-mainGray dark:text-white font-medium max-w-[42rem]">
              I am a{" "}
              <span className="bg-gradient-to-r from-[#FA709A] to-[#FEE140] font-bold bg-clip-text text-transparent">
                Product Designer
              </span>{" "}
              and Frontend Developer, I fully understand the process of design
              and development of a digital product, my job is to make a product
              usable and visually appealing, through the{" "}
              <span className="bg-gradient-to-r from-[#FA709A] to-[#FEE140] font-bold bg-clip-text text-transparent">
                Design Thinking
              </span>{" "}
              methodology I manage to create products that are endearing to
              users.
            </p>
          </div>
          <div className=" md:flex-[0_0_50%] w-full">
            <Image className="w-full h-full object-cover" src={about1} alt="about1" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center  gap-6 md:gap-0">
          <div className=" md:flex-[0_0_50%] w-full order-1 md:-order-1">
            <Image
              className="w-full h-full  object-cover"
              src={about2}
              alt="about2"
            />
          </div>
          <div  className="md:flex-[0_0_50%] flex justify-center items-center  pl-3 ">
            <p className="text-xl md:text-[clamp(22px,_2vw,_36px)] text-mainGray leading-[100%] dark:text-white font-medium max-w-[42rem]">
              I am passionate about{" "}
              <span className="bg-gradient-to-r from-[#84FAB0] to-[#8FD3F4] font-bold bg-clip-text text-transparent">
                never stop learning
              </span>
              , I am constantly training and learning about new and changing{" "}
              <span className="bg-gradient-to-r from-[#84FAB0] to-[#8FD3F4] font-bold bg-clip-text text-transparent">
                technology
              </span>{" "}
              trends that way I bring an updated opinion of the Tech industry.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center  gap-6 md:gap-0">
          <div  className="md:flex-[0_0_50%] ">
            <p className="text-xl md:text-[clamp(22px,_2vw,_36px)] text-mainGray leading-[100%] dark:text-white font-medium max-w-[42rem]">
              My full name is{" "}
              <span className="bg-gradient-to-r from-[#E0C3FC] to-[#8EC5FC] font-bold bg-clip-text text-transparent">
                Cristian David Muñoz Camayo
              </span>{" "}
              and more than what I said before I am a dreamer, I am proudly{" "}
              <span className=" bg-custom-3-gr bg-clip-text text-transparent">Colombian</span> and in me you will
              find a human being with the desire to do his best to help others.
            </p>
          </div>
          <div  className="md:flex-[0_0_50%] w-full">
            <Image
              className=" w-full h-full  object-cover"
              src={about3}
              alt="about3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
