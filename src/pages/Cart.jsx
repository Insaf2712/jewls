import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { FaX } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  decQuantity,
  deletefromcart,
  incQuantity,
} from "../features/slices/cartSlice";

const Cart = () => {
  const { cart, quantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <section className="space-y-10 h-full py-18">
      <div className="flex flex-col items-center justify-center gap-4 py-10">
        <h1 className="text-5xl text-[#41381E]">Cart</h1>
        <p className="text-xs text-[#7E7E7E]">
          <a href="" className="text-[#977354]">
            Home
          </a>{" "}
          / Cart
        </p>
      </div>

      <table className="table-auto  min-w-max border-collapse w-4/5 mx-auto">
        <thead className="bg-gray-100">
          <tr className="text-center">
            <th className="py-5 px-3  border-b border-gray-300">Image</th>
            <th className="py-5 px-3 border-b border-gray-300">Title</th>
            <th className="py-5 px-3 border-b border-gray-300">Price</th>
            <th className="py-5 px-3 border-b border-gray-300">Quantity</th>
            <th className="py-5 px-3 border-b border-gray-300">Total</th>
            <th className="py-5 px-3 border-b border-gray-300">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((el, index) => (
            <tr className="border-b">
              <td className="flex items-center justify-center py-5">
                <img className="w-20 h-25" src={el.img[0]} alt="" />
              </td>
              <td className="text-center">
                <h3>{el.title}</h3>
              </td>
              <td className="text-center">
                <span>${el.price}</span>
              </td>
              <td className="">
                <div className="flex gap-3  m-auto justify-center items-center w-fit">
                  <BiMinus
                    // onClick={() => incDec("dec", el.id)}
                    className="cursor-pointer "
                  />
                  <span>{el.quantity}</span>
                  <BiPlus
                    // onClick={() => incDec("inc", el.id)}
                    className="cursor-pointer "
                  />
                </div>
              </td>
              <td className="text-center">
                <span>${el.total.toFixed(2)}</span>
              </td>
              <td>
                <FaX
                  className="mx-auto cursor-pointer"
                  onClick={() => dispatch(deletefromcart(el.id))}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between w-4/5 mx-auto ">
        <div className="flex items-center w-1/2 bg-white border border-gray-300 h-12">
          <input
            type="text"
            placeholder="Coupon code"
            className="w-3/4 outline-none border-0 bg-transparent px-4"
          />
          <BsArrowRight className="ml-auto mr-5 clear-both" />
        </div>
        <div className="space-x-5">
          <button className="px-5 py-3 border border-gray-300 font-bold text-sm hover:text-white hover:bg-black transition-all duration-500 cursor-pointer">
            Continue shopping
          </button>
          <button className="px-5 py-3 border border-gray-300 bg-[#7E7E7E] text-white font-bold text-sm hover:text-white hover:bg-main transition-all duration-500 cursor-pointer">
            Update cart
          </button>
        </div>
      </div>
      <div className="w-3/6 float-end flex flex-col gap-4 h-fit ">
        <span className="text-xl text-main font-semibold">Cart Total</span>
        <div className="flex flex-col gap-4  bg-white p-5 rounded w-3/4">
          <div className="flex items-center justify-between ">
            <span className="text-lg">Subtotal: </span>
            <span className="text-lg">$39.00</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg">Total: </span>
            <span className="text-lg">0</span>
          </div>
        </div>
        <button className="w-3/4 py-4 bg-[#7E7E7E] hover:bg-main transition-all duration-300 text-white cursor-pointer">
          Proceed to Checkout{" "}
        </button>
      </div>
    </section>
  );
};

export default Cart;
