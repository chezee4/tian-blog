import Image from "next/image";

import img from "@/app/img/Escultures.png";
import footerAbstract from "@/app/img/footer-abstract.png";
import footerAbstract2 from "@/app/img/footer-abstract2.svg";
import logo from "@/app/img/logo.png";
import Link from "next/link";

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="bg-mainGray pb-12">
      <div className="max-w ">
        <div className="w-full relative h-44 bg-[#A87FF3] rounded-md -top-[50px] flex items-center">
          <Image
            src={footerAbstract2}
            alt="footerAbstract2"
            className=" absolute left-0 bottom-0"
          />
          <Image
            src={footerAbstract}
            alt="footerAbstract"
            className=" absolute right-0 top-0"
          />
          <Image src={img} alt="People" className=" absolute bottom-0 -left-[3.25rem] w-[185px] md:w-auto md:left-0 hidden mm:block" />
          <div className="ml-[2rem]  mm:ml-[8.5rem] sm:ml-[12rem] md:ml-[20rem] w-max mr-5 sm:mr-10 text-white">
            {" "}
            <span className="text-[14px] mm:text-[12px] sm:text-[14px] md:text-[22px] leading-normal font-bold inline-block sm:block">Thanks for visit my website </span>
            <p className="text-[14px] mm:text-[12px] sm:text-[14px] md:text-[22px] leading-normal  font-bold">
              If you have any questions you can write me to any of my social
              networks, I am sure I will answer you.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 justify-center sm:justify-between items-center pb-5">
          <span className="text-4xl  text-white font-bold flex items-center justify-start">
            <Image
              className="w-[50px] mr-2 invert-0 "
              src={logo}
              alt="Logo"
            />
            tian
          </span>
          <nav className="flex gap-4 mm:gap-6">
            <Link className="text-white  sm:text-xl" href="/">
              Home
            </Link>
            <Link className="text-white  sm:text-xl" href="/">
              Portfolio
            </Link>
            <Link className="text-white sm:text-xl" href="/">
              Skills
            </Link>
            <Link className="text-white whitespace-nowrap sm:text-xl" href="/">
              About Me
            </Link>
          </nav>
        </div>
      </div>
      <hr className="h-[1px] bg-[#E6E6E6]" />
    </footer>
  );
};

export default Footer;
