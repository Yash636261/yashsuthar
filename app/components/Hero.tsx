import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" bg-white text-black min-h-screen ">
      <Navbar />
      <div
        className=" w-full  h-full p-5
      "
      >
        <div className=" flex justify-end items-center w-full mb-5">
          <Image
            src="https://avatars.githubusercontent.com/u/98970491?v=4"
            alt="hero"
            width={1000}
            height={1000}
            className=" h-96 w-72 object-cover rounded-xl"
          />
        </div>
        {/* <h1 className="text-4xl font-semibold">Yash suthar</h1>
      <h2 className="text-2xl font-light">Full Stack Developer</h2> */}
        <div className="w-full h-64 flex justify-between items-end">
          <div className="flex flex-col gap-4">
            <div className=" justify-start text-black text-9xl font-normal font-['Kulim_Park'] leading-[106.23px]">
              Yash
              <br />
              Suthar
            </div>
            <div className=" justify-start text-black text-5xl font-normal font-['Kulim_Park'] leading-10">
              Full-Stack Developer
            </div>
          </div>
          <div className="w-48  text-right justify-start text-black text-xl font-normal font-['Kulim_Park'] leading-tight">
            {" "}
            hi, i am yash suthar i love to convert ui ux designs to code
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
