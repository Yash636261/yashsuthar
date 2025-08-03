import React from "react";
import Image from "next/image";

function SkillCard({ skill }: { skill: string }) {
  return (
    <div className="py-1 px-3 bg-[#F4F4F4] rounded-lg  border border-[#E0E0E0] flex justify-start items-center gap-1">
      {/* <div className="w-3.5 h-3.5 relative opacity-40">JS</div> */}
      <Image
        src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
        alt="skill"
        width={16}
        height={16}
        className=" size-6 "
      />
      <div className=" text-black text-sm font-medium leading-3">{skill}</div>
    </div>
  );
}

const Skills = () => {
  return (
    <div className=" text-black bg-gray-50 px-10 py-20">
      <h1 className=" mb-10 text-5xl font-normal bg-gradient-to-b from-black to-[#888888] bg-clip-text text-transparent">
        Skills
      </h1>
      <div className=" mb-5">
        <h2 className="text-lg font-normal mb-2">Languages</h2>
        <div className=" flex flex-wrap gap-2">
          <SkillCard skill="JavaScript" />
          <SkillCard skill="TypeScript" />
          <SkillCard skill="React" />
          <SkillCard skill="Next.js" />
          <SkillCard skill="Tailwind CSS" />
          <SkillCard skill="Node.js" />
          <SkillCard skill="Express" />
        </div>
      </div>

      <div className=" mb-5">
        <h2 className="text-lg font-normal mb-2">Frameworks</h2>
        <div className=" flex flex-wrap gap-2">
          <SkillCard skill="React" />
          <SkillCard skill="Next.js" />
          <SkillCard skill="Tailwind CSS" />
          <SkillCard skill="Node.js" />
          <SkillCard skill="Express" />
        </div>
      </div>

      <div className=" mb-5">
        <h2 className="text-lg font-normal mb-2">Tools</h2>
        <div className=" flex flex-wrap gap-2">
          <SkillCard skill="Git" />
          <SkillCard skill="GitHub" />
          <SkillCard skill="VS Code" />
          <SkillCard skill="Figma" />
        </div>
      </div>

      <div className=" mb-5">
        <h2 className="text-lg font-normal mb-2">Databases</h2>
        <div className=" flex flex-wrap gap-2">
          <SkillCard skill="MongoDB" />
          <SkillCard skill="PostgreSQL" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
