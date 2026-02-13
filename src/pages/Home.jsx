import React from "react";
import Main from "../components/home/Main";
import Collection from "../components/home/Collection";
import Accessories from "../components/home/Accessories";
import Products from "../components/home/Products";
import Diamond from "../components/home/Diamond";
import Sales from "../components/home/Sales";
import Journal from "../components/home/Journal";
import Submit from "../components/home/Submit";
import Delivery from "../components/home/Delivery";

const Home = () => {
  return (
    <div>
      <Main />
      <Collection />
      <Accessories />
      <Products />
      <Diamond />
      <Sales />
      <Journal />
      <Submit />
      <Delivery />
    </div>
  );
};

export default Home;
