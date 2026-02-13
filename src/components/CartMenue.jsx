import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CartMenue = ({ active, setActive }) => {
  return (
    <aside
      className={`fixed top-0 w-100  ${active ? "right-0 px-5" : "-right-full px-0"} transition-all duration-300 py-12 bg-white z-90 h-full space-y-8`}
    >
      <div className="flex items-center justify-between pb-4 border-b border-gray-500">
        <h2 className="text-3xl font-semibold flex items-center gap-2">
          Cart{" "}
          <span className="px-2.5 py-1.5 text-xs bg-black rounded-full text-white">
            0
          </span>
        </h2>
        <FaX className="cursor-pointer" onClick={() => setActive(false)} />
      </div>
      <div className="flex flex-col gap-4 w-full h-70 overflow-y-auto pr-3">
        <div className="flex items-center justify-between w-full">
          <img
            src="/assets/images/aurora_ring.jpg"
            alt=""
            className="w-20 h-25 rounded object-cover"
          />
          <div className="mr-auto ml-4">
            <h3 className="text-lg">Aurora Ring</h3>
            <span className="text-sm text-main">1 X $39.00</span>
          </div>
          <FaX className="text-sm text-main" />
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-auto pt-4 border-t border-gray-500">
        <div className="flex items-center justify-between">
          <h3 className="text-xl ">Subtotal</h3>
          <span className="font-semibold">$39.00</span>
        </div>
        <button className="w-full shadow flex items-center gap-2 justify-center cursor-pointer hover:bg-main mx-auto py-4 bg-black text-white hover:-translate-y-1">
          Checkout <BiChevronDown className="-rotate-90 text-xl" />
        </button>
        <Link to="/cart" onClick={()=>setActive(false)} className="w-full  cursor-pointer flex items-center gap-2 justify-center hover:text-main mx-auto py-4 bg-white hover:-translate-y-1">
          View Cart <BiChevronDown className="-rotate-90 text-xl" />
        </Link>
      </div>
    </aside>
  );
};

export default CartMenue;
