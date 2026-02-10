import React from "react";

const Footer2 = () => {
  return (
    <section className="py-7 flex items-center justify-between border-t border-gray-200 px-10">
      <div className="flex gap-5 text-xs text-[#41381E] ">
        <a href="" className="hover:text-[#837B68] cursor-pointer">
          USD
        </a>
        <a href="" className="hover:text-[#837B68] cursor-pointer">
          English
        </a>
      </div>
      <p className="text-[#837B68] text-sm ">
        © 2024 Hub Shop. All images are for demo purposes only.
      </p>
    </section>
  );
};

export default Footer2;
