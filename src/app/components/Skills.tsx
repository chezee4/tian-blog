import ProgressCircle from "./ProgressCircle";

const Skills = () => {
  return (
    <section className="my-[8rem] max-w">
      <h3 className=" font-Anton text-[4rem] text-normal mb-9 mt-[8.75rem]">SKILLS</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
        <div className="flex flex-col sm:flex-row items-center justify-start border border-gray-300 rounded-lg p-6">
          <ProgressCircle />
          <div className="ml-5 text-center sm:text-start mt-6 mb-8 sm:mt-0">
            <h3 className="text-mainGray dark:text-white mb-3 font-bold  text-4xl">
              UX Design
            </h3>
            <p className="text-mainGray dark:text-white max-w-[25rem] sm:max-w-[33.75rem]">
              UI design is the process of designing the visual and interactive
              elements of a user interface, such as buttons, icons, and layout,
              to create an intuitive and pleasing experience for users.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-start border border-gray-300 rounded-lg p-6">
          <ProgressCircle />
          <div className="ml-5 text-center sm:text-start mt-6 mb-8 sm:mt-0">
            <h3 className="text-mainGray dark:text-white mb-3 font-bold  text-4xl">
              UI Design
            </h3>
            <p className="text-mainGray dark:text-white max-w-[25rem] sm:max-w-[33.75rem]">
              UI design is the process of designing the visual and interactive
              elements of a user interface, such as buttons, icons, and layout,
              to create an intuitive and pleasing experience for users.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-start border border-gray-300 rounded-lg p-6">
          <ProgressCircle />
          <div className="ml-5 text-center sm:text-start mt-6 mb-8 sm:mt-0">
            <h3 className="text-mainGray dark:text-white mb-3 font-bold  text-4xl">
              Information Architecture
            </h3>
            <p className="text-mainGray dark:text-white max-w-[25rem] sm:max-w-[33.75rem]">
              Information architecture is the design of the structure and
              organization of content on a website or digital product to make it
              easy for users to navigate and understand.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-start border border-gray-300 rounded-lg p-6">
          <ProgressCircle />
          <div className="ml-5 text-center sm:text-start mt-6 mb-8 sm:mt-0">
            <h3 className="text-mainGray dark:text-white mb-3 font-bold text-4xl">
              Figma
            </h3>
            <p className="text-mainGray dark:text-white max-w-[25rem] sm:max-w-[33.75rem]">
              Figma is a cloud-based design tool that allows teams to
              collaborate on the design process in real time. It offers a range
              of features for designing, prototyping, and sharing user
              interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
