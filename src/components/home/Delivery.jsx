import React from "react";

const Payment = ({ icon, title, text }) => (
  <div className="flex gap-3 pr-12">
    <img src={icon} alt="" className="" />
    <div className="flex flex-col gap-1 text-xs">
      <h4 className="font-semibold ">{title}</h4>
      <span className="text-gray-500">{text}</span>
    </div>
  </div>
);

const Delivery = () => {
  return (
    <section className="pt-17">
      <div className="flex items-center justify-between px-10 py-12 w_full border-t border-b border-gray-200 ">
        <Payment
          icon="../assets/icons/car.svg"
          title="Fast Delivery"
          text="Free Shipping For orders over 130 "
        />
        <Payment
          icon="../assets/icons/p.svg"
          title="Secure Payments"
          text="256-Bit Protection "
        />
        <Payment
          icon="../assets/icons/gift.svg"
          title="Gift Card"
          text="Enjoy Huge Promotions "
        />
        <Payment
          icon="../assets/icons/pointer.svg"
          title="Easy 30 Day Return"
          text="Free returns. No hassle"
        />
      </div>
    </section>
  );
};

export default Delivery;
