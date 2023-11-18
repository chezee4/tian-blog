import Image from "next/image";

import img from "@/app/img/card-image.png";

const Portfolio = () => {
  return (
    <section className=" max-w">
      <h3 className=" font-Anton text-[64px] text-normal mb-9 mt-[8.75rem]">PORTFOLIO</h3>
      <div className="grid sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start justify-start">
     
      {
        Array(8).fill(0).map((_,index) => (
          <div className="border dark:border-[#737373] border-mainGray rounded-lg p-3 pb-5" key={index}>
          <Image src={img} alt="Portfolio Image"  className=" w-full" />
          <div className="mt-6">
            <h3 className="text-mainGray dark:text-white text-3xl font-bold mb-5">
              Mi portal U
            </h3>
            <div className="space-x-2">
              <span className="bg-purple-100 p-1 text-purple-400 text-xs font-normal rounded-full whitespace-nowrap">
                UX Design
              </span>
              <span className="bg-purple-100 p-1 text-purple-400 text-xs font-normal rounded-full  whitespace-nowrapl">
                University
              </span>
              <span className="bg-purple-100 p-1 text-purple-400 text-xs font-normal rounded-full  whitespace-nowrap">
                JavaScript
              </span>
            </div>
            <button className="mt-6 py-2 px-6 text-white text-base bg-mainGray w-full">
              Figma community
            </button>
          </div>
        </div>
        ))
      }
         
       
      </div>
    </section>
  );
};

export default Portfolio;
