import Image from "next/image";

import img from "@/app/img/footer-img.png";
import img2 from "@/app/img/footer-abstract.png";
import logo from "@/app/img/logo.png";
import Link from "next/link";

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="bg-mainGray pb-12 mt-8">
      <div className="gap-y-14 relative flex items-center justify-center">
        <div className="flex justify-center w-auto md:w-[24rem] lg:w-[54rem] h-auto">
          <div className="-top-8 absolute w-full md:w-[24rem] lg:w-[54rem] h-auto bg-purple-400 rounded-3xl px-4">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="flex items-start w-[8rem] md:w-[11rem] h-[11rem] md:h-[24rem] justify-start mr-12">
                <Image
                  src={img}
                  className="absolute top-0 left-0 h-auto w-[6rem] md:w-[8rem] lg:w-[11rem]"
                  alt="Footer-image"
                />
              </div>
              <h3 className="p-7 md:p-12 text-white text-sm md:text-xl font-bold">
                Thanks for visit my website If you have any questions you can
                write me to any of my social networks, I am sure I will answer
                you.
              </h3>
              <Image
                src={img2}
                className="absolute top-0 right-0 w-[5rem] md:object-fill"
                alt="Footer-image"
              />
            </div>
          </div>
          <div className="border-b border-b-gray-400 mt-[14rem] pb-8 flex items-center justify-between">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <h2 className="text-white text-[2.85rem] font-bold flex items-start justify-start mb-10">
                <Image
                  className="mr-2 w-[3.75rem] h-[3.75rem]"
                  src={logo}
                  alt="Logo"
                />
                tian
              </h2>
              <nav className="space-x-6">
                <Link className="text-white" href="/">
                  Home
                </Link>
                <Link className="text-white" href="/">
                  Portfolio
                </Link>
                <Link className="text-white" href="/">
                  Skills
                </Link>
                <Link className="text-white" href="/">
                  About Me
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
