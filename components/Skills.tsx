import React from "react";
import Image from "next/image";

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

const languages: SkillProps[] = [
  {
    name: "JavaScript",
    img: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
  },
  {
    name: "TypeScript",
    img: "https://img.icons8.com/fluency/48/typescript--v2.png",
  },
  { name: "React", img: "https://img.icons8.com/office/40/react.png" },
  { name: "Next.js", img: "https://img.icons8.com/fluency/48/nextjs.png" },
  {
    name: "Tailwind CSS",
    img: "https://img.icons8.com/fluency/48/tailwind_css.png",
  },
  { name: "Node.js", img: "https://img.icons8.com/fluency/48/node-js.png" },
  { name: "Express Js", img: "https://img.icons8.com/ios/50/express-js.png" },
];

const frameworks: SkillProps[] = [
  { name: "React", img: "https://img.icons8.com/office/40/react.png" },
  { name: "Next.js", img: "https://img.icons8.com/fluency/48/nextjs.png" },
  {
    name: "Tailwind CSS",
    img: "https://img.icons8.com/fluency/48/tailwind_css.png",
  },
  { name: "Node.js", img: "https://img.icons8.com/fluency/48/node-js.png" },
  { name: "Express", img: "https://img.icons8.com/ios/50/express-js.png" },
];

const tools: SkillProps[] = [
  {
    name: "Git",
    img: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
  },
  {
    name: "GitHub",
    img: "https://img.icons8.com/?size=100&id=LoL4bFzqmAa0&format=png&color=000000",
  },
  {
    name: "VS Code",
    img: "https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000",
  },
  {
    name: "Figma",
    img: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000",
  },
];

const databases: SkillProps[] = [
  {
    name: "MongoDB",
    img: "https://img.icons8.com/?size=100&id=tBBf3P8HL0vR&format=png&color=000000",
  },
  {
    name: "PostgreSQL",
    img: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
  },
];

const Skills: React.FC = () => {
  return (
    <div className="text-black bg-gray-50 container" id="skills">
      <h1 className="title font-normal bg-gradient-to-b from-black to-[#888888] bg-clip-text text-transparent">
        Skills
      </h1>

      <section className="mb-5">
        <h2 className="text-h7 font-normal mb-2">Languages</h2>
        <div className="flex flex-wrap gap-2">
          {languages.map((s) => (
            <SkillCard key={s.name} name={s.name} img={s.img} />
          ))}
        </div>
      </section>

      <section className="mb-5">
        <h2 className="text-h7 font-normal mb-2">Frameworks</h2>
        <div className="flex flex-wrap gap-2">
          {frameworks.map((s) => (
            <SkillCard key={s.name} name={s.name} img={s.img} />
          ))}
        </div>
      </section>

      <section className="mb-5">
        <h2 className="text-h7 font-normal mb-2">Tools</h2>
        <div className="flex flex-wrap gap-2">
          {tools.map((s) => (
            <SkillCard key={s.name} name={s.name} img={s.img} />
          ))}
        </div>
      </section>

      <section className="mb-5">
        <h2 className="text-h7 font-normal mb-2">Databases</h2>
        <div className="flex flex-wrap gap-2">
          {databases.map((s) => (
            <SkillCard key={s.name} name={s.name} img={s.img} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
