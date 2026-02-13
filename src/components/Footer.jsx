import React from "react";

const Infooter = ({ title, link, link1, link2, link3, link4, text }) => (
  <div className="flex flex-col gap-3 text-sm  w-full">
    <h4 className="text-[#41381E]">{title}</h4>
    <p className="text-[#41381E]">{text}</p>
    <a href="" className="text-[#837B68] cursor-pointer hover:text-[#41381E]">
      {link}
    </a>
    <a href="" className="text-[#837B68] cursor-pointer hover:text-[#41381E]">
      {link1}
    </a>
    <a href="" className="text-[#837B68] cursor-pointer hover:text-[#41381E]">
      {link2}
    </a>
    <a href="" className="text-[#837B68] cursor-pointer hover:text-[#41381E]">
      {link3}
    </a>
    <a href="" className="text-[#837B68] cursor-pointer hover:text-[#41381E]">
      {link4}
    </a>
  </div>
);

const Footer = () => {
  return (
    <section className="flex flex-col w-full">
      <div className="flex   h-fit py-20 gap-50 px-10">
        <div className="flex flex-col gap-7 items-start w-27/100 ">
          <img
            src="https://jewelleryhub.liquid-themes.com/wp-content/uploads/2021/11/logo.svg"
            alt=""
            className="w-22 "
          />
          <p className="text-[#837B68] text-sm ">
            Shop online or visit our showroom to explore our exquisite
            collections and find the perfect piece to elevate your style.
            Because when it comes to jewelry, nothing less than perfection will
            do.
          </p>
          <div className="flex items-center justify-between  gap-8">
            <img
              src="../assets/icons/pinterest.svg"
              alt=""
              className="w-3 transition-all duration-300 hover:scale-110"
            />
            <img
              src="../assets/icons/instagram.svg"
              alt=""
              className="w-3  transition-all duration-300 hover:scale-110"
            />
          </div>
        </div>

        <div className="flex  gap-10 text-sm ">
          <Infooter
            title="Hub Shop"
            link="Track Your Order"
            link1="Product Guides"
            link2="Wishlists"
            link3="Privacy Policy"
            link4="Store Locator"
          />
          <Infooter
            title="Products"
            link="In-Store Shop"
            link1="Brands"
            link2="Gift Cards"
            link3="Careers"
            link4="About Us"
          />
          <Infooter
            title="Contact"
            text="2024 Hub. All images are for demo purposes only."
            link="orders@hubshop.com"
          />
        </div>
      </div>
      <div className="py-7 px-10 flex items-center justify-between border-t border-gray-200 px-10">
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
      </div>
    </section>
  );
};

export default Footer;
