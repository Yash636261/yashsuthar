import Image from "next/image";
import React from "react";

const services = [
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

const Service = () => {
  return (
    <div className=" text-black bg-gray-50 px-10 py-20">
      <h1 className=" mb-10 text-5xl font-normal bg-gradient-to-b from-black to-[#888888] bg-clip-text text-transparent">
        Services
      </h1>

      <div className=" grid grid-cols-3 gap-5 max-w-5xl mx-auto  border">
        {services.map((service, index) => (
          <div
            key={index}
            className=" flex flex-col items-center justify-center gap-4 py-10 "
          >
            <div className="flex justify-center items-center">
              <Image
                src={service.image[0]}
                alt="service"
                width={70}
                height={70}
                className=" -rotate-12 hover:-translate-y-2 transition-all duration-300"
              />{" "}
              <Image
                src={service.image[1]}
                alt="service"
                width={70}
                height={70}
                className=" rotate-12 hover:-translate-y-2 transition-all duration-300"
              />
            </div>
            <h2 className=" text-lg font-medium">{service.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
