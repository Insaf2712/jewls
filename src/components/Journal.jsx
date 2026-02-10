import React from "react";
import { trends } from "../data";
import { FaPlus } from "react-icons/fa";

const Journal = () => {
  return (
    <section className="py-18 flex flex-col gap-6 items-center justify-center px-10 overflow-hidden h-full">
      <h2 className="text-4xl  uppercase">Our Journal</h2>
      <p className="w-2/5 mx-auto text-center text-gray-500">
        You will find original content about the latest trends in the world of
        jewelry design and fashion.
      </p>
      <div className="flex items-center gap-15">
        {trends.map((j) => (
          <div className="flex flex-col gap-2 w-3/8 mx-auto h-[50vh]">
            <div className="relative w-full ">
              <img
                src={j.img}
                alt=""
                className="w-full h-[40vh] object-cover "
              />
              <div className="flex items-center gap-2 absolute bottom-0 right-0 bg-white px-2 py-3 w-fit h-fit">
                <span className="text-sm leading-0">Read</span>
                <FaPlus className="text-sm h-3" />
              </div>
            </div>
            <span className="tracking-wide">TRENDS</span>
            <p className="text-[24px]">{j.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journal;
