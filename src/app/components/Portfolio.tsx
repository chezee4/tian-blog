import Image from "next/image";

import img from "@/app/img/card-image.png";

const Portfolio = () => {
  return (
    <section>
      <h3 className="text-[2.5rem] text-normal mb-9 mt-[8.75rem]">Portfolio</h3>
      <div className="grid md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start justify-start">
        <div className="border border-white dark:border-mainGray rounded-lg p-4">
          <Image src={img} alt="Portfolio Image" />
          <div className="mt-6">
            <h3 className="text-mainGray dark:text-white text-3xl font-bold mb-6">
              Mi portal U
            </h3>
            <div className="space-x-2">
              <span className="bg-purple-100 p-1 text-purple-400 text-xs font-normal rounded-full">
                UX Design
              </span>
              <span className="bg-purple-100 p-1 text-purple-400 text-xs font-normal rounded-full">
                University
              </span>
              <span className="bg-purple-100 p-1 text-purple-400 text-xs font-normal rounded-full">
                JavaScript
              </span>
            </div>
            <button className="mt-6 py-3 px-6 text-white text-base bg-mainGray w-full">
              Figma community
            </button>
          </div>
        </div>
        <div className="border border-white dark:border-mainGray rounded-lg p-4">
          <Image src={img} alt="Portfolio Image" />
          <div className="mt-6">
            <h3 className="text-mainGray dark:text-white text-3xl font-bold mb-6">
              Mi portal U
            </h3>
            <div className="space-x-2">
              <span className="bg-purple-100 p-1 text-purple-400 text-xs font-normal rounded-full">
                UX Design
              </span>
              <span className="bg-purple-100 p-1 text-purple-400 text-xs font-normal rounded-full">
                University
              </span>
              <span className="bg-purple-100 p-1 text-purple-400 text-xs font-normal rounded-full">
                JavaScript
              </span>
            </div>
            <button className="mt-6 py-3 px-6 text-white text-base bg-mainGray w-full">
              Figma community
            </button>
          </div>
        </div>
        <div className="border border-white dark:border-mainGray rounded-lg p-4">
          <Image src={img} alt="Portfolio Image" />
          <div className="mt-6">
            <h3 className="text-mainGray dark:text-white text-3xl font-bold mb-6">
              Mi portal U
            </h3>
            <div className="space-x-2">
              <span className="bg-purple-100 p-1 text-purple-400 text-xs font-normal rounded-full">
                UX Design
              </span>
              <span className="bg-purple-100 p-1 text-purple-400 text-xs font-normal rounded-full">
                University
              </span>
              <span className="bg-purple-100 p-1 text-purple-400 text-xs font-normal rounded-full">
                JavaScript
              </span>
            </div>
            <button className="mt-6 py-3 px-6 text-white text-base bg-mainGray w-full">
              Figma community
            </button>
          </div>
        </div>
        <div className="border border-white dark:border-mainGray rounded-lg p-4">
          <Image src={img} alt="Portfolio Image" />
          <div className="mt-6">
            <h3 className="text-mainGray dark:text-white text-3xl font-bold mb-6">
              Mi portal U
            </h3>
            <div className="space-x-2">
              <span className="bg-purple-100 p-1 text-purple-400 text-xs font-normal rounded-full">
                UX Design
              </span>
              <span className="bg-purple-100 p-1 text-purple-400 text-xs font-normal rounded-full">
                University
              </span>
              <span className="bg-purple-100 p-1 text-purple-400 text-xs font-normal rounded-full">
                JavaScript
              </span>
            </div>
            <button className="mt-6 py-3 px-6 text-white text-base bg-mainGray w-full">
              Figma community
            </button>
          </div>
        </div>
        <div className="border border-white dark:border-mainGray rounded-lg p-4">
          <Image src={img} alt="Portfolio Image" />
          <div className="mt-6">
            <h3 className="text-mainGray dark:text-white text-3xl font-bold mb-6">
              Mi portal U
            </h3>
            <div className="space-x-2">
              <span className="bg-purple-100 p-1 text-purple-400 text-xs font-normal rounded-full">
                UX Design
              </span>
              <span className="bg-purple-100 p-1 text-purple-400 text-xs font-normal rounded-full">
                University
              </span>
              <span className="bg-purple-100 p-1 text-purple-400 text-xs font-normal rounded-full">
                JavaScript
              </span>
            </div>
            <button className="mt-6 py-3 px-6 text-white text-base bg-mainGray w-full">
              Figma community
            </button>
          </div>
        </div>
        <div className="border border-white dark:border-mainGray rounded-lg p-4">
          <Image src={img} alt="Portfolio Image" />
          <div className="mt-6">
            <h3 className="text-mainGray dark:text-white text-3xl font-bold mb-6">
              Mi portal U
            </h3>
            <div className="space-x-2">
              <span className="bg-purple-100 p-1 text-purple-400 text-xs font-normal rounded-full">
                UX Design
              </span>
              <span className="bg-purple-100 p-1 text-purple-400 text-xs font-normal rounded-full">
                University
              </span>
              <span className="bg-purple-100 p-1 text-purple-400 text-xs font-normal rounded-full">
                JavaScript
              </span>
            </div>
            <button className="mt-6 py-3 px-6 text-white text-base bg-mainGray w-full">
              Figma community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
