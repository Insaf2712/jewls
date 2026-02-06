import React from "react";
import { BiChevronDown, BiLogoInstagram } from "react-icons/bi";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-12 bg-[#FBF7F1] w-full px-10 ">
      <div className="flex gap-4">
        <p className="text-xs text-[#977354]">
          Free Delivery on orders over £120
        </p>
        <span className="text-xs text-black hover:text-[#977354] cursor-pointer">
          help@liquid-themes.com
        </span>
      </div>
      <div className="flex gap-6 ">
        <a
          className="flex gap-2  items-center  hover:text-[#977354] cursor-pointer  text-xs"
          href=""
        >
          <BiLogoInstagram /> Follow on Instagram
        </a>
        <a className=" hover:text-[#977354] cursor-pointer text-xs" href="">
          My Favourites
        </a>
        <a
          className="flex gap-1 items-center  hover:text-[#977354] cursor-pointer  text-xs"
          href=""
        >
          USD <BiChevronDown />{" "}
        </a>
        <a
          className="flex gap-1 items-center  hover:text-[#977354] cursor-pointer text-xs "
          href=""
        >
          English <BiChevronDown />
        </a>
      </div>
    </div>
  );
};

export default Header;
