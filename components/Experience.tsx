import React from "react";

const Experience = () => {
  return (
    <div className=" text-black bg-white px-10 py-20">
      <h1 className=" mb-10 text-5xl font-normal bg-gradient-to-b from-black to-[#888888] bg-clip-text text-transparent">
        Experience
      </h1>

      <div className=" flex w-full justify-between items-center border border-x-0 border-[#E0E0E0] py-5 hover:py-6 transition-all duration-300">
        <div>
          <h2 className=" text-2xl font-medium">Full Stack Developer</h2>
          <h3 className=" text-base font-normal">Bundled.design</h3>
        </div>{" "}
        <p className=" text-3xl font-normal">2024 - Present</p>
      </div>
    </div>
  );
};

export default Experience;
