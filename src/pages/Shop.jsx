import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { BiChevronDown } from "react-icons/bi";
import { products } from "../data";
import { BsHeartPulse } from "react-icons/bs";
import { HiHeart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Shop = () => {
  const filterOptions = [
    "Popularity",
    "Rating",
    "Newness",
    "Lowest Price",
    "Highest Price",
  ];
  return (
    <section className="px-30 py-15">
      <div className="flex flex-col items-center justify-center gap-4 py-10">
        <h1 className="text-5xl text-[#41381E]">SHOP</h1>
        <p className="text-xs text-[#7E7E7E]">
          <a href="">Home</a> / Shop
        </p>
      </div>
      <Menu as="div" className="relative inline-block float-end ">
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent border-0 px-3 py-2 text-sm font-semibold  outline-0! text-gray-900   dark:bg-white/10 dark:text-white dark:shadow-none dark:inset-ring-white/5 dark:hover:bg-white/20">
          Default Order
          <BiChevronDown
            aria-hidden="true"
            className="-mr-1 size-5 text-gray-400"
          />
        </MenuButton>

        <MenuItems
          transition
          className="absolute left-1/2 -translate-x-1/2 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 overflow-hidden"
        >
          <div className="">
            {filterOptions.map((f) => (
              <MenuItem>
                <span className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-black-100 hover:bg-black hover:text-white! data-focus:text-gray-900 data-focus:outline-hidden dark:text-gray-300 dark:data-focus:bg-white/5 dark:data-focus:text-white cursor-pointer">
                  {f}
                </span>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
      <div className="grid grid-cols-3 w-full gap-5">
        {products.map((p, i) => (
          <Link
            to={`/product/${p.id}`}
            className="flex flex-col gap-4 w-full"
            key={i}
          >
            <img src={p.img[0]} alt="" className="w-full h-95 object-cover" />
            <div className="flex items-center justify-between w-full">
              <div className="space-y-1">
                <h3 className="">{p.title}</h3>
                <p>${p.price}</p>
              </div>
              <FaRegHeart />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Shop;
