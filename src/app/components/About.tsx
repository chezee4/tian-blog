import about1 from "@/app/img/about1.png";
import about2 from "@/app/img/about2.png";
import about3 from "@/app/img/about3.png";
import Image from "next/image";

const About = () => {
  return (
    <section className="mt-[8.5rem]">
      <h3 className="uppercase text-[4rem] mb-[6.5rem]">About me</h3>
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <p className="text-xl text-mainGray dark:text-white font-bold max-w-[24rem]">
            I am a{" "}
            <span className="bg-gradient-to-r from-[#FA709A] to-[#FEE140] bg-clip-text text-transparent">
              Product Designer
            </span>{" "}
            and Frontend Developer, I fully understand the process of design and
            development of a digital product, my job is to make a product usable
            and visually appealing, through the{" "}
            <span className="bg-gradient-to-r from-[#FA709A] to-[#FEE140] bg-clip-text text-transparent">
              Design Thinking
            </span>{" "}
            methodology I manage to create products that are endearing to users.
          </p>
          <Image
            className="mt-[4.5rem] md:ml-[4.5rem] md:mt-0"
            src={about1}
            alt="about1"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <Image
            className="mt-[4.5rem] md:mr-[4.5rem] md:mt-0"
            src={about2}
            alt="about2"
          />
          <p className="text-xl text-mainGray dark:text-white font-bold max-w-[24rem]">
            I am passionate about{" "}
            <span className="bg-gradient-to-r from-[#84FAB0] to-[#8FD3F4] bg-clip-text text-transparent">
              never stop learning
            </span>
            , I am constantly training and learning about new and changing{" "}
            <span className="bg-gradient-to-r from-[#84FAB0] to-[#8FD3F4] bg-clip-text text-transparent">
              technology
            </span>{" "}
            trends that way I bring an updated opinion of the Tech industry.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <p className="text-xl text-mainGray dark:text-white font-bold max-w-[24rem]">
            My full name is{" "}
            <span className="bg-gradient-to-r from-[#E0C3FC] to-[#8EC5FC] bg-clip-text text-transparent">
              Cristian David Muñoz Camayo
            </span>{" "}
            and more than what I said before I am a dreamer, I am proudly{" "}
            <span className="text-red-600">Colombian</span> and in me you will
            find a human being with the desire to do his best to help others.
          </p>
          <Image
            className="mt-[4.5rem] md:ml-[4.5rem] md:mt-0"
            src={about3}
            alt="about3"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
