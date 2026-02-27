import React, { useEffect, useState } from "react";
import Header from "./components/home/Header";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import SingleProduct from "./pages/SingleProduct";
import CartMenue from "./components/CartMenue";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Faq from "./pages/Faq";
import About from "./pages/About";

const App = () => {
  const [active, setActive] = useState(false);

  return (
    <BrowserRouter>
      <Header />
      <Nav setActive={setActive} active={active} />
      <CartMenue setActive={setActive} active={active} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
