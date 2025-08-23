"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      // Get current time in India (IST - UTC+5:30)
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const indiaTime = new Date(utc + 5.5 * 3600000);
      setTime(indiaTime);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Calculate hour hand rotation (30 degrees per hour + 0.5 degrees per minute)
  const hourRotation = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5;

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-IN", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };
  return (
    <div className=" bg-black text-white p-10 flex flex-col justify-between gap-20 md:gap-32 lg:gap-40 rounded-t-3xl">
      <div className=" w-full grid grid-cols-1 md:grid-cols-3 gap-y-5">
        <Link className=" text-h1 font-satisfy" href="/">
          yash suthar
        </Link>
        <div className=" md:col-span-2">
          <p className=" text-h6">
            A passionate software engineer with a knack for crafting elegant
            solutions and a love for crafting better experiences for brands and
            for people.
          </p>

          <div className="flex justify-start items-center gap-2 lg:gap-4 text-[#444444] text-sm lg:text-base  font-medium mt-5 lg:mt-10">
            <Link
              href="/#projects"
              className=" hover:text-white transition duration-300"
            >
              Projects
            </Link>
            <Link
              href="/#book-call"
              className=" hover:text-white transition duration-300"
            >
              BookCall
            </Link>
            <Link
              href="/#services"
              className=" hover:text-white transition duration-300"
            >
              Services
            </Link>
            <Link
              href="/#experience"
              className=" hover:text-white transition duration-300"
            >
              Experience
            </Link>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-start md:justify-between items-start gap-5 md:items-center ">
        <div className="flex items-center gap-3 lg:gap-6">
          {/* Clock Face */}
          <div className="relative size-16">
            {/* Clock Circle */}
            <div className="w-full h-full border-2 border-white rounded-full"></div>

            {/* Hour Hand */}
            <div
              className="absolute top-1/2 left-1/2 w-0.5 h-5 bg-white origin-bottom transform   transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translate(-50%, -100%) rotate(${hourRotation}deg)`,
                transformOrigin: "50% 100%",
              }}
            ></div>

            {/* Center Dot */}
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          {/* Time Display */}
          <div className="text-left">
            <div className="text-white text-h7 font-medium">
              {formatTime(time)} local time
            </div>
            <div className="text-gray-400 text-xs md:text-sm ">India</div>
            <div className="text-gray-400 text-xs md:text-sm">
              Working internationally
            </div>
          </div>
        </div>

        <div className=" text-sm md:text-base lg:text-lg font-medium flex justify-center gap-3 items-center capitalize">
          <Link
            href="/twitter"
            className=" "
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Link>
          <Link
            href="/github"
            className=" "
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </Link>
          <Link
            href="/linkedIn"
            className=" "
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
