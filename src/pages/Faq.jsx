import React, { useState } from "react";
import { BiChevronDown, BiChevronRight, BiPlus, BiMinus } from "react-icons/bi";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full py-5 text-left focus:outline-none"
      >
        <span className="flex items-center gap-4">
          <span className="text-xl text-gray-400">
            {isOpen ? (
              <BiMinus className="text-[#0A0A0A] cursor-pointer" />
            ) : (
              <BiPlus className="text-[#0A0A0A] cursor-pointer" />
            )}
          </span>
          <span className="text-[##0A0A0A] font-medium text-lg">{title}</span>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100 mb-5" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-500 text-sm leading-relaxed ml-10">{content}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openId, setOpenId] = useState(null);

  const menuItems = [
    { label: "Shipping", href: "#" },
    { label: "Return Policy", href: "#return-policy" },
    { label: "Product Delivery", href: "#product-delivery" },
    { label: "Payment Methods", href: "#payment-methods" },
    { label: "Warranty", href: "#" },
    { label: "International Sales", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  const faqSections = [
    {
      id: "return-policy",
      title: "Return Policy",
      items: [
        {
          title: "What payment methods can I use?",
          content:
            "Hub offers a range of skincare products that are feminine, delicate and long-lasting with vitamins and nutritions to improve your skin condition.",
        },
        {
          title: "What should I do if the payment is not accepted?",
          content:
            "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
          title: "Can I purchase from outside the US or Canada?",
          content:
            "Hub offers a range of skincare products that are feminine, delicate and long-lasting with vitamins and nutritions to improve your skin condition.",
        },
        {
          title: "Can I change the shipping address?",
          content:
            "You can change your shipping address within 24 hours of placing your order. Please contact our support team immediately with your order number.",
        },
      ],
    },
    {
      id: "product-delivery",
      title: "Product Delivery",
      items: [
        {
          title: "What payment methods can I use?",
          content:
            "Hub offers a range of skincare products that are feminine, delicate and long-lasting with vitamins and nutritions to improve your skin condition.",
        },
        {
          title: "What should I do if the payment is not accepted?",
          content:
            "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
          title: "Can I purchase from outside the US or Canada?",
          content:
            "Hub offers a range of skincare products that are feminine, delicate and long-lasting with vitamins and nutritions to improve your skin condition.",
        },
        {
          title: "Can I change the shipping address?",
          content:
            "You can change your shipping address within 24 hours of placing your order. Please contact our support team immediately with your order number.",
        },
      ],
    },
    {
      id: "payment-methods",
      title: "Payment Methods",
      items: [
        {
          title: "What payment methods can I use?",
          content:
            "Hub offers a range of skincare products that are feminine, delicate and long-lasting with vitamins and nutritions to improve your skin condition.",
        },
        {
          title: "What should I do if the payment is not accepted?",
          content:
            "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
          title: "Can I purchase from outside the US or Canada?",
          content:
            "Hub offers a range of skincare products that are feminine, delicate and long-lasting with vitamins and nutritions to improve your skin condition.",
        },
        {
          title: "Can I change the shipping address?",
          content:
            "You can change your shipping address within 24 hours of placing your order. Please contact our support team immediately with your order number.",
        },
      ],
    },
  ];

  return (
    <section>
      <div className="flex flex-col gap-6 items-center justify-center py-20 px-10 overflow-hidden text-center">
        <h2 className="text-6xl uppercase font-light tracking-wider text-[#41381E]">
          NEED HELP?
        </h2>
        <p className="w-full md:w-2/5 mx-auto text-gray-500">
          Over 25 years of experience, we have crafted thousands of strategic
          discovery process that enables us to peel back the layers.
        </p>
      </div>

      <div className=" mb-20">
        <div className="w-full mb-16">
          <img
            src="/assets/images/faq.jpg"
            alt="FAQ"
            className="w-full h-auto object-cover rounded-sm shadow-sm"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-30 px-15">
          <div className="w-full md:w-1/4">
            <div className="sticky top-20">
              <ul className="flex flex-col border-t border-gray-200">
                {menuItems.map((item, index) => (
                  <li key={index} className="border-b border-gray-200">
                    <a
                      href={item.href}
                      className="flex items-center justify-between py-4 text-md font-medium text-[##0A0A0A] hover:text-gray-500 transition-colors duration-300 group"
                    >
                      {item.label}
                      <BiChevronDown className="text-xl group-hover:translate-x-1 transition-transform" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full md:w-3/4 flex flex-col gap-20">
            {faqSections.map((section, sIndex) => (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <h6 className="text-sm font-bold uppercase tracking-widest text-[##0A0A0A] mb-8 relative inline-block">
                  {section.title}
                </h6>
                <div className="">
                  {section.items.map((item, iIndex) => {
                    const id = `${sIndex}-${iIndex}`;
                    return (
                      <AccordionItem
                        key={id}
                        title={item.title}
                        content={item.content}
                        isOpen={openId === id}
                        onClick={() => setOpenId(openId === id ? null : id)}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
