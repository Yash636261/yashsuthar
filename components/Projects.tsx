import React from "react";
import Card from "./Card";

const Projects = () => {
  // Use a different name to avoid colliding with the component identifier.
  // Update JSX to use `projects` (lowercase) instead of `Projects`.
  const projects = [
    {
      title: "RoadTorque",
      description:
        "An automotive blog and news website delivering daily posts, industry updates, and insights on cars, bikes, and EVs. Designed with a clean, responsive layout for an engaging reading experience.",
      image:
        "https://res.cloudinary.com/dt77luabi/image/upload/v1755438077/Screenshot_2025-08-17_190706_whcngm.webp",
      tags: ["Next.js", "TailwindCSS"],
      link: "https://www.roadtorque.tech",
    },
    {
      title: "Ev-Way",
      description:
        "EV-Way aims to provide comprehensive guidance to electric vehicle (EV) owners to plan their trips efficiently, ensuring they have access to necessary charging stations and other essential services.",
      image:
        "https://res.cloudinary.com/dt77luabi/image/upload/v1755438076/Screenshot_2025-08-17_190819_mmi6r6.webp",
      tags: ["Nextjs", "TypeScript"],
      link: "https://ev-way.vercel.app/",
    },
    {
      title: "MedVault",
      description:
        "MedVault is an advanced patient data management system designed to ensure data security, accessibility, interoperability, and privacy protection within the healthcare ecosystem",
      image:
        "https://res.cloudinary.com/dt77luabi/image/upload/v1755438077/Screenshot_2025-08-17_190900_svswmt.webp",
      tags: ["Node.js", "Express"],

      link: "https://med-vault-ten.vercel.app/",
    },
  ];
  return (
    <section id="projects" className=" text-black bg-white container">
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
