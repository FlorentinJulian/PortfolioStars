import { socialNetworks } from "@/constants";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative"></div>
        <h1 className="text-white text-[25px] font-semibold pb-10">
          Frontend{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            Developer{" "}
          </span>
        </h1>
      </div>

      <div className="flex flex-row gap-5 mb-2">
        {socialNetworks.map(({ logo, src, id }) => (
          <Link
            key={id}
            href={src}
            target="_blank"
            className="transition-all duration-300 hover:scale-95"
          >
            {logo}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
