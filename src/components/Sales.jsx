import React from "react";
import Marquee from "react-fast-marquee";
const Sales = () => {
  return (
    <section className="mt-50 space-y-8">
      <Marquee
        autoFill={true}
        direction="right"
        className="overflow-hidden cursor-grab"
      >
        <h3 className="text-7xl font-thin mx-8 p">50% OFF</h3>
      </Marquee>
      <Marquee autoFill={true} className="overflow-hidden">
        <h3 className="text-7xl font-thin mx-8 text-[#a29a8b] cursor-grab">
          FINAL HOURS
        </h3>
      </Marquee>
    </section>
  );
};

export default Sales;
