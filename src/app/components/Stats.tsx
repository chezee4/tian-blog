const Stats = () => {
  return (
    <section className="rounded-3xl dark:bg-green-300 border border-gray-200 py-[5rem] px-[3.5rem] space-y-16 mt-[5.5rem]">
      <div className="bg-transparent">
        <h2 className="font-normal text-[2rem] text-green-300 text-center">
          90%
        </h2>
        <h3 className="font-normal text-2xl text-green-300 mt-6 text-center">
          Job Success Score on Upwork
        </h3>
      </div>
      <div>
        <h2 className="font-normal text-[2rem] text-green-300 flex items-center justify-center">
          &gt; 25.000
        </h2>
        <h3 className="font-normal text-2xl text-green-300 mt-6 text-center">
          Duplicates on Figma Community
        </h3>
      </div>
      <div>
        <h2 className="font-normal text-[2rem] text-green-300 text-center flex items-center justify-center">
          &gt; 2K
        </h2>
        <h3 className="font-normal text-2xl text-green-300 mt-6 text-center">
          In Finished Works
        </h3>
      </div>
    </section>
  );
};

export default Stats;
