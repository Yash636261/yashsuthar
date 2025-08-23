import React from "react";

const Experience = () => {
  return (
    <section className=" text-black bg-white container-section" id="experience">
      <h1 className=" title font-normal bg-gradient-to-b from-black to-[#888888] bg-clip-text text-transparent">
        Experience
      </h1>

      <div className=" flex w-full justify-between items-center border border-x-0 border-[#E0E0E0] py-5 hover:py-6 transition-all duration-300">
        <div>
          <h2 className=" text-h5 font-medium">Full Stack Developer</h2>
          <h3 className=" text-h8 font-normal">Bundled.design</h3>
        </div>{" "}
        <p className=" text-h4 font-normal">2024 - Present</p>
      </div>
    </section>
  );
};

export default Experience;
