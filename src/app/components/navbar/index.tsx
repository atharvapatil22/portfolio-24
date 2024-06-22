import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            {/* <Logo /> */}
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <p>Projects</p>
                </Link>
              </li>
              <li>
                <Link href="/interests">
                  <p>Interests</p>
                </Link>
              </li>
              <li>
                <Link href="/exp-timeline">
                  <p>Experience Timeline</p>
                </Link>
              </li>
            </ul>
            {/* <Button /> */}
            <button>Btn</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
