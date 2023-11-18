import Link from "next/link";
import {
  Instagram,
  ArrowDownCircle,
} from "lucide-react";
import Portal from "@/app/img/Portal.svg";
import Escultures from "@/app/img/Escultures.jpg";
import Stats from "./components/Stats";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Intro from "./components/Intro";
import About from "./components/About";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className=" w-full">
        <section className="max-w  w-full flex gap-8 justify-center">
          <div className="mt-10 flex ">
            <div>
              <div className="flex sm:block flex-col items-center">
                <h2 className="dark:text-white  text-center sm:text-left font-Anton leading-[90%] tracking-[-3px] sm:tracking-[-6px] max-w-min text-[clamp(80px,_24vw,_200px)] lg:text-[clamp(80px,_13vw,_200px)] text-mainGray">
                  PRODUCT DESIGNER
                </h2>
                <h3 className=" text-[clamp(48px,_13.3vw,_113px)] lg:text-[clamp(50px,_7.4vw,_113px)] bg-gradient-to-r from-[#FA709A] to-[#FEE140] tracking-[-1px] sm:tracking-[-3.5px] font-Anton bg-clip-text text-transparent sm:-mt-3">
                  CRISTIAN MUÑOZ
                </h3>
              </div>
              <div className="flex justify-between mt-[4.5rem] gap-2  mb-10">
                <Link
                  className="w-[45px] h-[45px] flex items-center justify-center border dark:border-white border-[#E6E6E6] rounded-md p-1 hover:bg-white/30  transition-linear"
                  href="/"
                >
                  <Instagram className="dark:bg-mainGray" size={32} />
                </Link>
                <Link
                  className="w-[45px] h-[45px] flex items-center justify-center border dark:border-white border-[#E6E6E6] rounded-md p-1 hover:bg-white/30  transition-linear"
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41"
                    height="40"
                    viewBox="0 0 41 40"
                    fill="none"
                    className="dark:invert"
                  >
                    <g clip-path="url(#clip0_1103_682)">
                      <path
                        d="M13.9332 40.0003C17.6132 40.0003 20.5998 37.0137 20.5998 33.3337V26.667H13.9332C10.2532 26.667 7.26651 29.6537 7.26651 33.3337C7.26651 37.0137 10.2532 40.0003 13.9332 40.0003Z"
                        fill="#292929"
                      />
                      <path
                        d="M7.26651 19.9997C7.26651 16.3197 10.2532 13.333 13.9332 13.333H20.5998V26.6663H13.9332C10.2532 26.6663 7.26651 23.6797 7.26651 19.9997Z"
                        fill="#292929"
                      />
                      <path
                        d="M7.26651 6.66667C7.26651 2.98667 10.2532 0 13.9332 0H20.5998V13.3333H13.9332C10.2532 13.3333 7.26651 10.3467 7.26651 6.66667Z"
                        fill="#292929"
                      />
                      <path
                        d="M20.5999 0H27.2665C30.9465 0 33.9332 2.98667 33.9332 6.66667C33.9332 10.3467 30.9465 13.3333 27.2665 13.3333H20.5999V0Z"
                        fill="#292929"
                      />
                      <path
                        d="M33.9332 19.9997C33.9332 23.6797 30.9465 26.6663 27.2665 26.6663C23.5865 26.6663 20.5999 23.6797 20.5999 19.9997C20.5999 16.3197 23.5865 13.333 27.2665 13.333C30.9465 13.333 33.9332 16.3197 33.9332 19.9997Z"
                        fill="#292929"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1103_682">
                        <rect
                          width="40"
                          height="40"
                          fill="white"
                          transform="translate(0.600006)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link
                  className="w-[45px] h-[45px] flex items-center justify-center border dark:border-white border-[#E6E6E6] rounded-md p-1 hover:bg-white/30  transition-linear"
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41"
                    height="40"
                    viewBox="0 0 41 40"
                    fill="none"
                    className="dark:invert"
                  >
                    <path
                      d="M36.3916 1.00535C30.5472 0.98895 8.99081 1.01655 4.00841 1.00535C2.45801 1.00535 1.20001 2.22495 1.20001 3.72695V36.2794C1.20001 37.7817 2.45801 39.0001 4.00841 39.0001H36.3916C37.9428 39.0001 39.2 37.7817 39.2 36.2789V3.72695C39.2 2.22495 37.9428 1.00535 36.3916 1.00535Z"
                      fill="#292929"
                    />
                    <path
                      d="M21.5812 32.802C21.5812 32.802 21.5812 23.2508 21.5812 23.2504C21.5256 21.4952 22.5748 19.8572 24.686 19.7836C26.7432 19.7836 27.5664 21.352 27.5664 23.6516V32.8016H33.252V22.994C33.252 17.74 30.4472 15.2952 26.706 15.2952C23.6388 15.2952 22.2916 17.0092 21.5432 18.1768L21.5812 15.6968H15.8956C15.9696 17.3016 15.8952 32.802 15.8952 32.802H21.5812ZM12.748 25.3844V15.6964H7.06162V32.8016H12.7484C12.7472 31.0056 12.7504 27.1552 12.748 25.3844ZM9.90602 13.3616C11.8884 13.3616 13.1228 12.048 13.1228 10.4068C13.1064 6.44797 6.72122 6.49197 6.72642 10.4064C6.72202 12.0604 7.99042 13.382 9.90602 13.3616Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link
                  className="w-[45px] h-[45px] flex items-center justify-center border dark:border-white border-[#E6E6E6] rounded-md p-1 hover:bg-white/30  transition-linear"
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41"
                    height="40"
                    viewBox="0 0 41 40"
                    fill="none"
                    className="dark:invert"
                  >
                    <path
                      d="M39.3684 8.44863C38.0016 9.05583 36.5332 9.46423 34.992 9.64863C36.566 8.70583 37.7728 7.21343 38.3412 5.43383C36.87 6.30663 35.2392 6.94063 33.502 7.28343C32.1124 5.80223 30.1328 4.87663 27.9416 4.87663C23.0984 4.81183 19.3748 9.54343 20.5208 14.2306C14.1892 13.9134 8.57599 10.8798 4.81679 6.26903C2.76519 9.61463 3.92999 14.399 7.17519 16.4414C5.92679 16.4014 4.75119 16.0586 3.72439 15.4886C3.67679 19.2106 6.31719 22.353 9.83599 23.0542C8.75479 23.3558 7.50919 23.403 6.39519 23.1854C7.36519 26.2118 10.1788 28.4158 13.5124 28.477C10.4984 30.8854 6.27879 32.141 2.23199 31.6322C18.5048 41.647 36.494 28.5262 35.5652 12.3918C37.0544 11.3166 38.3472 9.97543 39.3684 8.44863Z"
                      fill="#292929"
                    />
                  </svg>
                </Link>
                <Link
                  className="w-[45px] h-[45px] flex items-center justify-center border dark:border-white border-[#E6E6E6] rounded-md p-1 hover:bg-white/30  transition-linear"
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41"
                    height="40"
                    viewBox="0 0 41 40"
                    fill="none"
                    className="dark:invert"
                  >
                    <path
                      d="M20.3906 3.33301C17.0942 3.33301 13.8719 4.31049 11.131 6.14185C8.39023 7.9732 6.25402 10.5762 4.99256 13.6216C3.7311 16.6671 3.40104 20.0182 4.04413 23.2512C4.68722 26.4842 6.27456 29.4539 8.60544 31.7848C10.9363 34.1157 13.906 35.703 17.139 36.3461C20.3721 36.9892 23.7232 36.6591 26.7686 35.3977C29.814 34.1362 32.417 32 34.2484 29.2592C36.0797 26.5184 37.0572 23.296 37.0572 19.9997C37.0574 17.8109 36.6264 15.6436 35.7889 13.6214C34.9514 11.5992 33.7237 9.76184 32.1761 8.21416C30.6284 6.66648 28.791 5.43883 26.7688 4.60131C24.7466 3.7638 22.5793 3.33283 20.3906 3.33301ZM25.6897 28.5871C25.6273 28.7427 25.5324 28.8831 25.4113 28.999C25.2903 29.1148 25.1458 29.2035 24.9877 29.259C24.8295 29.3144 24.6613 29.3355 24.4944 29.3206C24.3275 29.3058 24.1656 29.2554 24.0197 29.173L19.4953 25.6573L16.5914 28.3363C16.524 28.3861 16.4452 28.4182 16.3622 28.4295C16.2792 28.4408 16.1947 28.4311 16.1164 28.4012L16.6731 23.4205L16.6909 23.4346L16.7023 23.3363C16.7023 23.3363 24.844 15.9238 25.1756 15.6079C25.5114 15.2929 25.4006 15.2246 25.4006 15.2246C25.4197 14.8404 24.7981 15.2246 24.7981 15.2246L14.0106 22.1647L9.51807 20.6347C9.51807 20.6347 8.82807 20.3872 8.76307 19.843C8.69473 19.303 9.54055 19.0097 9.54055 19.0097L27.4022 11.9138C27.4022 11.9138 28.8706 11.2596 28.8706 12.343L25.6897 28.5871Z"
                      fill="black"
                    />
                  </svg>
                </Link>
                <Link
                  className="w-[45px] h-[45px] flex items-center justify-center border dark:border-white border-[#E6E6E6] rounded-md p-1 hover:bg-white/30  transition-linear"
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    className="dark:invert"
                  >
                    <g clip-path="url(#clip0_1103_699)">
                      <path
                        d="M21.25 20C21.25 25.8586 16.7641 30.625 11.25 30.625C5.73594 30.625 1.25 25.8586 1.25 20C1.25 14.1414 5.73594 9.375 11.25 9.375C16.7641 9.375 21.25 14.1414 21.25 20ZM28.75 10C27.8621 10 26.1876 10.4314 24.9494 13.3205C24.1759 15.1251 23.75 17.4974 23.75 20C23.75 22.5026 24.1759 24.8749 24.9494 26.6795C26.1876 29.5686 27.8621 30 28.75 30C29.6379 30 31.3124 29.5686 32.5506 26.6795C33.3241 24.8749 33.75 22.5026 33.75 20C33.75 17.4974 33.3241 15.1251 32.5506 13.3205C31.3124 10.4314 29.6379 10 28.75 10ZM37.5 10C37.1685 10 36.8506 10.1317 36.6161 10.3661C36.3817 10.6006 36.25 10.9185 36.25 11.25V28.75C36.25 29.0815 36.3817 29.3995 36.6161 29.6339C36.8505 29.8683 37.1685 30 37.5 30C37.8315 30 38.1495 29.8683 38.3839 29.6339C38.6183 29.3995 38.75 29.0815 38.75 28.75V11.25C38.75 10.9185 38.6183 10.6006 38.3839 10.3661C38.1494 10.1317 37.8315 10 37.5 10Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1103_699">
                        <rect width="40" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
              <button className=" w-full flex items-center justify-center  gap-2 sm:gap-4  text-white px-4 sm:px-8 py-4 text-sm sm:text-xl bg-mainGray mt-10">
                Download Curriculum Vitae
                <ArrowDownCircle size={32} />
              </button>
            </div>
            <div className=" hidden lg:block w-max ">
              {" "}
              <Image
                src={Portal}
                alt="Portal"
                className=" self-start invert dark:invert-0 w-[clamp(70px,_10.3vw,_160px)] "
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <Image src={Escultures} alt="Escultures" className="h-full" />
          </div>
        </section>
        <Stats />
        <Portfolio />
        <Skills />   
        <Intro />
        <About /> 
      </main>
    </>
  );
}
