import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" bg-white text-black px-10 py-20">
      {/* <div className=" rounded-full w-full mb-10 bg-gradient-to-b from-black to-[#888888] h-96"></div> */}

      <div className=" w-full text-xl mx-auto font-medium max-w-xl flex justify-between items-center">
        <Link href='/twitter' className=" " target="_blank" rel="noopener noreferrer">Twitter</Link>
        <Link href='/github' className=" " target="_blank" rel="noopener noreferrer">github</Link>
        <Link href='/linkedIn' className=" " target="_blank" rel="noopener noreferrer">linkedin</Link>
      </div>

      
    </div>
  );
};
  
export default Footer;
