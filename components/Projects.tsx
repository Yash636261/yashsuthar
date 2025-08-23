import React from "react";
import Card from "./Card";
import { projects } from "../config/data";

const Projects = () => {
  return (
    <section id="projects" className=" text-black bg-white container-section">
      <h1 className="  title text-center font-normal bg-gradient-to-b from-black to-[#888888] bg-clip-text text-transparent">
        Projects
      </h1>
      <div className=" grid md:grid-cols-2 gap-5 max-w-5xl mx-auto ">
        <div className=" md:col-span-2">
          <Card
            title={projects[0].title}
            description={projects[0].description}
            image={projects[0].image}
            tags={projects[0].tags}
            link={projects[0].link}
          />
        </div>
        {projects.slice(1).map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
