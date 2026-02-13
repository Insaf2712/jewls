import React from "react";
import Slider from "./Slider";
import HeaderContent from "./HeaderContent";

const Main = () => {
  return (
    <div className="h-screen grid grid-cols-5 grid-rows-3 ">
      <Slider />
      <HeaderContent />
    </div>
  );
};

export default Main;
