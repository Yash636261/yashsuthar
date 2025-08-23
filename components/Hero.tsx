import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const Hero = () => {
  return (
    <section className=" bg-white text-black min-h-screen " id="hero">
      <Navbar />
      <div className=" w-full  h-full p-5">
        <div className=" flex justify-end items-center w-full mb-20 md:mb-5">
          <Image
            src="https://avatars.githubusercontent.com/u/98970491?v=4"
            alt="hero"
            width={1000}
            height={1000}
            className=" h-96 w-72 object-cover rounded-xl"
          />
        </div>
        <div className="w-full h-64 flex flex-col md:flex-row justify-between items-start md:items-end">
          <div className="flex flex-col gap-4">
            <div className=" justify-start text-black text-7xl md:text-8xl lg:text-9xl font-normal font-['Kulim_Park'] lg:leading-[106.23px]">
              Yash
              <br />
              Suthar
            </div>
            <div className=" justify-start text-black text-h2 font-normal font-['Kulim_Park'] leading-10">
              Full-Stack Developer
            </div>
          </div>
          <div className="w-48  md:text-right justify-start text-black text-h6 font-normal font-['Kulim_Park'] leading-tight">
            {" "}
            hi, i am yash suthar i love to convert ui ux designs to code
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
