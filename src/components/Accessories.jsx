import React from "react";

const Btn = ({ text }) => (
  <button className=" rounded  cursor-pointer transition-all duration-300">
    {text}
  </button>)

const Accessories = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center px-10 overflow-hidden">
      <span className="w-fit p-2 rounded border text-xs ">Jewelry Store</span>
      <h2 className="text-4xl  uppercase">Shop Accessories</h2>
      <p className="w-3/5 mx-auto text-center text-gray-500">
        our diamonds are meticulously graded for their brilliance and fire,
        ensuring every piece shines with unparalleled radiance.
      </p>
        <div className="flex item-center gap-8 text-sm text-gray-500 ">
        <Btn text="Bracelets" />
        <Btn text="Earrings" />
        <Btn text="Necklaces" />
        <Btn text="Rings" />
      </div>
    </div>
  );
};

export default Accessories;
