import React, { useState } from "react";
import { BsEye, BsEyeFill } from "react-icons/bs";
import { FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [active, setActive] = useState(false);
  return (
    <section className="h-full py-20 flex flex-col gap-6 ">
      <div className="flex flex-col items-center justify-center gap-4 py-10">
        <h1 className="text-5xl text-[#41381E]">Login</h1>
      </div>

      <div className="flex flex-col gap-3 w-2/3 p-10 rounded border border-gray-400 mx-auto">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="">Username or email address</label>
          <input
            className="w-full bg-white border border-gray-100 py-3 "
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="">Password</label>
          <div className="w-full bg-white border border-gray-100 py-3 flex items-center justify-between pr-4">
            <input
              className=" bg-transparent outline-0 border-0 px-4"
              type={`${active ? "text" : "password"}`}
            />
            {active ? (
              <FaEyeSlash onClick={() => setActive(false)} />
            ) : (
              <BsEye onClick={() => setActive(true)} />
            )}
          </div>
        </div>
        <div className="flex gap-3">
          <button className="bg-[#977354] px-7 py-4  text-white text-sm font-semibold ">
            Log in
          </button>
          <div className="flex gap-2 items-center ">
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember" className="text-gray-500">
              Remember me
            </label>
          </div>
        </div>
        <a className="text-[#977354] outline-0" href="">
          Lost your password?{" "}
        </a>
      </div>
    </section>
  );
};

export default Login;
