import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data";
import {
  BiChevronLeft,
  BiChevronRight,
  BiLeftArrow,
  BiMinus,
  BiPlus,
  BiRightArrow,
} from "react-icons/bi";
import { FaFacebook, FaPinterest, FaRegHeart } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { BsMenuApp } from "react-icons/bs";
import { FiGrid } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decQuantity,
  incQuantity,
  resetQuantity,
} from "../features/slices/cartSlice";

const SingleProduct = () => {
  const [obj, setObj] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);

  useEffect(() => {
    const p = products.find((p) => p.id === +id);
    setObj(p);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const addProductToCart = () => {
    dispatch(
      addToCart({
        ...obj,
      }),
    );
    dispatch(resetQuantity());
  };

  return (
    <section className="px-18">
      <div className="flex items-center justify-between gap-19">
        <img src={obj.img && obj.img[0]} alt="" className=" w-full h-[80vh]" />

        <div className="flex flex-col gap-8">
          <div className="flex gap-2">
            <BiChevronLeft />
            <FiGrid />

            <BiChevronRight />
          </div>
          <h1 className="text-2xl text-[#41381E]">{obj?.title}</h1>
          <p>${obj?.price}</p>
          <p className="text-gray-400 text-sm  ">{obj?.description}</p>
          <div className="flex gap-3 items-center">
            <div className="flex gap-5 items-center w-auto ">
              <BiMinus
                onClick={() => dispatch(decQuantity(obj?.id))}
                className="cursor-pointer "
              />
              <span className="font-semibold">{quantity}</span>
              <BiPlus
                onClick={() => dispatch(incQuantity(obj?.id))}
                className="cursor-pointer "
              />
            </div>
            <button
              onClick={() => addProductToCart()}
              className="text-white bg-amber-900 px-5 py-2 font-bold"
            >
              ADD TO CART
            </button>
          </div>
          <div className="flex gap-1">
            <FaRegHeart />
            <p className="text-xs ">Add to wishlist</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="space-x-2">
              <span>CATEGORIES:</span>{" "}
              {obj?.categories?.map((c) => (
                <span>{c}</span>
              ))}
            </div>

            <div className="flex gap-3">
              <FaFacebook />
              <FaTwitter />
              <FaPinterest />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
