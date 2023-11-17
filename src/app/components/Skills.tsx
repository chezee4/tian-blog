import ProgressCircle from "./ProgressCircle";

const Skills = () => {
  return (
    <section className="my-[8rem]">
      <h3 className="text-[2.5rem] text-normal mb-9 mt-[8.75rem]">Portfolio</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
        <div className="flex flex-col md:flex-row items-start justify-start border border-gray-300 rounded-lg p-6">
          <ProgressCircle />
          <div className="ml-5">
            <h3 className="text-mainGray dark:text-whi mb-6 font-medium text-4xl md:text-[4rem]">
              UX Design
            </h3>
            <p className="text-mainGray dark:text-white text-xl max-w-[8.5rem] md:max-w-[33.75rem]">
              UI design is the process of designing the visual and interactive
              elements of a user interface, such as buttons, icons, and layout,
              to create an intuitive and pleasing experience for users.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-start border border-gray-300 rounded-lg p-6">
          <ProgressCircle />
          <div className="ml-5">
            <h3 className="text-mainGray dark:text-whi mb-6 font-medium text-4xl md:text-[4rem]">
              UX Design
            </h3>
            <p className="text-mainGray dark:text-whi text-xl max-w-[8.5rem] md:max-w-[33.75rem]">
              UI design is the process of designing the visual and interactive
              elements of a user interface, such as buttons, icons, and layout,
              to create an intuitive and pleasing experience for users.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row  items-start justify-start border border-gray-300 rounded-lg p-6">
          <ProgressCircle />
          <div className="ml-5">
            <h3 className="text-mainGray dark:text-whiy mb-6 font-medium text-4xl md:text-[4rem]">
              UX Design
            </h3>
            <p className="text-mainGray dark:text-whi text-xl max-w-[8.5rem] md:max-w-[33.75rem]">
              UI design is the process of designing the visual and interactive
              elements of a user interface, such as buttons, icons, and layout,
              to create an intuitive and pleasing experience for users.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row  items-start justify-start border border-gray-300 rounded-lg p-6">
          <ProgressCircle />
          <div className="ml-5">
            <h3 className="text-mainGray dark:text-whi mb-6 font-medium text-4xl md:text-[4rem]">
              UX Design
            </h3>
            <p className="text-mainGray dark:text-whi text-xl max-w-[8.5rem] md:max-w-[33.75rem]">
              UI design is the process of designing the visual and interactive
              elements of a user interface, such as buttons, icons, and layout,
              to create an intuitive and pleasing experience for users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
