import React from "react";
import { images } from "../../data";

const Submit = () => {
  return (
    <section>
      <div className="flex items-center px-50 justify-center py-23 ">
        <input
          type="email"
          className="w-2/3 h-fit  border-b border-gray-200 focus:outline-none placeholder:text-black focus:placeholder:text-gray-400"
          placeholder="Enter your email address to subscribe"
        />
        <button className=" hover:text-gray-800 border-b border-gray-200 h-full p-1 text-center text-xs cursor-pointer ">
          Submit
        </button>
      </div>
      <div className="flex flex-col items-center gap-3 justify-center space-y-10">
        <img src="../assets/icons/bag.svg" alt="" className="" />
        <div className="flex flex-col gap-0.5 items-center">
          <a href="" className="text-md cursor-pointer hover:text-[#41381E] ">
            @diamondstore
          </a>
          <span className="text-xs text-gray-500">13.3K Followers</span>
        </div>
      </div>
      <div className="w-full h-fit px-6 flex gap-2 py-17">
        {images.map((i) => (
          <img src={i.img} alt="" className="w-full h-fit  " />
        ))}
      </div>
    </section>
  );
};

export default Submit;
