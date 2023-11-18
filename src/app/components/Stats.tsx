const Stats = () => {
  return (
    <section className=" max-w-[1570px] mx-auto mt-[5.5rem] px-[10px] w-full">
      <div className=" w-max lg:w-full flex flex-col md:flex-row justify-between lg:justify-center items-cente  gap-8 items-center  mx-auto rounded-3xl dark:bg-transparent border bg-[#F6FFF6] border-gray-200 py-[5rem] px-[3rem] lg:px-[3.5rem]">
      <div className=" w-full md:w-1/3 lg:w-auto  lg:max-w-none flex flex-col items-center justify-center">
        <h2 className=" font-bold text-center whitespace-nowrap text-[48px] lg:text-[clamp(58px,_8vw,_128px)] dark:text-[#C8FEC7] text-[#64C661] leading-[90%] tracking-[-5px] lg:tracking-[-10px]">
          90%
        </h2>
        <h3 className="font-[system-ui] text-[18px] max-w-[166px] md:max-w-none lg:max-w-[320px] font-bold lg:text-[clamp(18px,_2.4vw,_36px)] dark:text-[#C8FEC7] text-[#64C661] mt-6 text-center tracking-[-1.4px] lg:tracking-[-2px] ">
          Job Success Score on Upwork
        </h3>
      </div>
      <div className=" w-max hidden lg:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          className="w-[80px]"
        >
          <path
            d="M40 0L40.0077 39.9606L55.3074 3.04481L40.0223 39.9668L68.2842 11.7157L40.0332 39.9777L76.9552 24.6926L40.0394 39.9923L80 40L40.0394 40.0077L76.9552 55.3074L40.0332 40.0223L68.2842 68.2842L40.0223 40.0332L55.3074 76.9552L40.0077 40.0394L40 80L39.9923 40.0394L24.6926 76.9552L39.9777 40.0332L11.7157 68.2842L39.9668 40.0223L3.04481 55.3074L39.9606 40.0077L0 40L39.9606 39.9923L3.04481 24.6926L39.9668 39.9777L11.7157 11.7157L39.9777 39.9668L24.6926 3.04481L39.9923 39.9606L40 0Z"
            fill="#C8FEC7"
            stroke-width="4"
            className=" stroke-[#64C661] dark:stroke-[#C8FEC7]"
          />
        </svg>
      </div>
      <div className=" w-full md:w-1/3 lg:w-auto lg:max-w-none flex flex-col items-center justify-center">
        <h2 className="font-bold text-[48px] lg:text-[clamp(58px,_8vw,_128px)] whitespace-nowrap dark:text-[#C8FEC7] text-[#64C661] leading-[90%]  tracking-[-5px] lg:tracking-[-10px]">
          &gt; 25.000
        </h2>
        <h3 className="font-bold font-[system-ui] max-w-[166px] md:max-w-none lg:max-w-[320px] text-[18px] lg:text-[clamp(18px,_2.4vw,_36px)] dark:text-[#C8FEC7] text-[#64C661] mt-6 text-center tracking-[-1.4px] lg:tracking-[-2px]">
          Duplicates on Figma Community
        </h3>
      </div>
      <div className=" w-max hidden lg:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          className="w-[80px]"
        >
          <path
            d="M40 0L40.0077 39.9606L55.3074 3.04481L40.0223 39.9668L68.2842 11.7157L40.0332 39.9777L76.9552 24.6926L40.0394 39.9923L80 40L40.0394 40.0077L76.9552 55.3074L40.0332 40.0223L68.2842 68.2842L40.0223 40.0332L55.3074 76.9552L40.0077 40.0394L40 80L39.9923 40.0394L24.6926 76.9552L39.9777 40.0332L11.7157 68.2842L39.9668 40.0223L3.04481 55.3074L39.9606 40.0077L0 40L39.9606 39.9923L3.04481 24.6926L39.9668 39.9777L11.7157 11.7157L39.9777 39.9668L24.6926 3.04481L39.9923 39.9606L40 0Z"
            fill="#C8FEC7"
            stroke-width="4"
            className=" stroke-[#64C661] dark:stroke-[#C8FEC7]"
          />
        </svg>
      </div>
      <div className="w-full md:w-1/3 lg:w-auto lg:max-w-none flex flex-col items-center md:self-baseline">
        <h2 className="font-bold text-[48px] lg:text-[clamp(58px,_8vw,_128px)] whitespace-nowrap dark:text-[#C8FEC7] text-[#64C661] leading-[90%]  tracking-[-5px] lg:tracking-[-10px]">
          &gt; 2K
        </h2>
        <h3 className="font-bold text-[18px] font-[system-ui] max-w-[166px] md:max-w-none lg:max-w-[240px]  lg:text-[clamp(18px,_2.4vw,_36px)] dark:text-[#C8FEC7] text-[#64C661] mt-6 text-center tracking-[-1.4px] lg:tracking-[-2px]">
          In Finished Works
        </h3>
      </div>
      </div>
    </section>
  );
};

export default Stats;
