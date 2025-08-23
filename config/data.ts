type SkillProps = {
  name: string;
  img: string;
};

export const skills: Record<string, SkillProps[]> = {
  Languages: [
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
  ],
  Frameworks: [
    { name: "React", img: "https://img.icons8.com/office/40/react.png" },
    { name: "Next.js", img: "https://img.icons8.com/fluency/48/nextjs.png" },
    {
      name: "Tailwind CSS",
      img: "https://img.icons8.com/fluency/48/tailwind_css.png",
    },
    { name: "Node.js", img: "https://img.icons8.com/fluency/48/node-js.png" },
    { name: "Express", img: "https://img.icons8.com/ios/50/express-js.png" },
  ],
  Tools: [
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
  ],
  Databases: [
    {
      name: "MongoDB",
      img: "https://img.icons8.com/?size=100&id=tBBf3P8HL0vR&format=png&color=000000",
    },
    {
      name: "PostgreSQL",
      img: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
    },
  ],
};

export const projects = [
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

export const services = [
  {
    title: "Frontend Development",
    image: [
      "https://framerusercontent.com/images/4qLHrn6B8ZLDOrsHXxKmnlbzo40.png?scale-down-to=512",
      "https://framerusercontent.com/images/4qLHrn6B8ZLDOrsHXxKmnlbzo40.png?scale-down-to=512",
    ],
  },
  {
    title: "Backend Development",
    image: [
      "https://framerusercontent.com/images/4qLHrn6B8ZLDOrsHXxKmnlbzo40.png?scale-down-to=512",
      "https://framerusercontent.com/images/4qLHrn6B8ZLDOrsHXxKmnlbzo40.png?scale-down-to=512",
    ],
  },
  {
    title: "UI/UX Design",
    image: [
      "https://framerusercontent.com/images/4qLHrn6B8ZLDOrsHXxKmnlbzo40.png?scale-down-to=512",
      "https://framerusercontent.com/images/4qLHrn6B8ZLDOrsHXxKmnlbzo40.png?scale-down-to=512",
    ],
  },
  {
    title: "SEO",
    image: [
      "https://framerusercontent.com/images/4qLHrn6B8ZLDOrsHXxKmnlbzo40.png?scale-down-to=512",
      "https://framerusercontent.com/images/4qLHrn6B8ZLDOrsHXxKmnlbzo40.png?scale-down-to=512",
    ],
  },
  {
    title: "Performance Optimization",
    image: [
      "https://framerusercontent.com/images/4qLHrn6B8ZLDOrsHXxKmnlbzo40.png?scale-down-to=512",
      "https://framerusercontent.com/images/4qLHrn6B8ZLDOrsHXxKmnlbzo40.png?scale-down-to=512",
    ],
  },
  {
    title: "Full-Stack Web Apps",
    image: [
      "https://framerusercontent.com/images/4qLHrn6B8ZLDOrsHXxKmnlbzo40.png?scale-down-to=512",
      "https://framerusercontent.com/images/4qLHrn6B8ZLDOrsHXxKmnlbzo40.png?scale-down-to=512",
    ],
  },
];

