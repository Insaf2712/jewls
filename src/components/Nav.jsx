import React from "react";
import { BiBasket, BiChevronDown, BiSearch, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

const Nav = ({ active, setActive }) => {
  return (
    <div className="sticky top-0 z-50 flex justify-between items-center h-15 w-full border-t border-gray-300 bg-[#FBF7F1] px-10">
      <img
        src="https://jewelleryhub.liquid-themes.com/wp-content/uploads/2021/11/logo.svg"
        alt=""
        className="w-22 "
      />
      <div className="flex items-center gap-14 text-xs group">
        <Link
          to="/"
          className="group-hover:opacity-50 hover:opacity-100 transition-all duration-300 font-semibold "
        >
          HOME
        </Link>
        <Link
          to="/shop"
          className="group-hover:opacity-50 hover:opacity-100 transition-all duration-300 text-gray-800"
        >
          SHOP
        </Link>
        <a
          className="flex gap-1 items-center group-hover:opacity-50 hover:opacity-100 transition-all duration-300 text-gray-800"
          href=""
        >
          EARRINGS <BiChevronDown />
        </a>
        <a
          className=" flex gap-1 items-center group-hover:opacity-50 hover:opacity-100 transition-all duration-300 text-gray-800"
          href=""
        >
          NECKLACES <BiChevronDown />
        </a>
        <a
          href=""
          className="group-hover:opacity-50 hover:opacity-100 transition-all duration-300 text-gray-800"
        >
          RINGS
        </a>
        <Link
          to="/about"
          className="group-hover:opacity-50 hover:opacity-100 transition-all duration-300 text-gray-800"
        >
          ABOUT
        </Link>
        <Link
          to="/faq"
          className="group-hover:opacity-50 hover:opacity-100 transition-all duration-300 text-gray-800"
        >
          FAQ
        </Link>
      </div>
      <div className="flex items-center gap-10 text-xl text-gray-700 ">
        <BiSearch />
        <BiUser />
        <BiBasket onClick={() => setActive(true)} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Nav;
