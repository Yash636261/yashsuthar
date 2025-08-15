import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <div className=" text-black bg-white px-10 py-20">
      <h1 className=" mb-10 text-5xl font-normal bg-gradient-to-b from-black to-[#888888] bg-clip-text text-transparent">
        Projects
      </h1>
      <div className=" grid grid-cols-2 gap-5 max-w-5xl mx-auto ">
        <div className=" col-span-2">
          <Card />
        </div>
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Projects;
