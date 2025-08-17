import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <Link className="text-2xl font-satisfy" href="/">
        yash suthar
      </Link>
      <div className="flex gap-4">
        <Link href="/#projects">Projects</Link>
        <Link href="/#book-call">BookCall</Link>
        <Link href="/#services">Services</Link>
        <Link href="/#experience">Experience</Link>
      </div>
    </div>
  );
};

export default Navbar;
