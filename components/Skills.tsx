import React from "react";
import Image from "next/image";
import { skills } from "../config/data";

type SkillProps = {
  name: string;
  img: string;
};

function SkillCard({ name, img }: SkillProps) {
  return (
    <div className="py-1 px-3 bg-[#F4F4F4] rounded-lg border border-[#E0E0E0] flex items-center gap-2 md:gap-1">
      <Image
        src={img}
        alt={name}
        width={16}
        height={16}
        className="object-contain size-6"
      />
      <div className="text-black text-xs md:text-sm font-medium leading-3">
        {name}
      </div>
    </div>
  );
}

const Skills: React.FC = () => {
  return (
    <div className="text-black bg-gray-50 container-section" id="skills">
      <h1 className="title font-normal bg-gradient-to-b from-black to-[#888888] bg-clip-text text-transparent">
        Skills
      </h1>

      {Object.entries(skills).map(([category, items]) => (
        <section className="mb-5" key={category}>
          <h2 className="text-h7 font-normal mb-2">{category}</h2>
          <div className="flex flex-wrap gap-2">
            {items.map((s) => (
              <SkillCard key={s.name} name={s.name} img={s.img} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Skills;
