import React from "react";
import Main from "../components/Main";
import Collection from "../components/Collection";
import Accessories from "../components/Accessories";
import Products from "../components/Products";
import Diamond from "../components/Diamond";
import Sales from "../components/Sales";
import Journal from "../components/Journal";
import Submit from "../components/Submit";
import Delivery from "../components/Delivery";
import Footer from "../components/Footer";

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
      <Footer />
    </div>
  );
};

export default Home;
