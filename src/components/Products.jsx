import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "../data";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Products = () => {
  const [id, setid] = useState(null);

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={50}
      loop={true}
      className="px-10! py-20! cursor-grab"
    >
      {products.map((p) => (
        <SwiperSlide key={p.id}>
          <div className="flex flex-col gap-5 w-full h-fit">
            <img
              src={id === p.id ? p.img[0] : p.img[1]}
              alt=""
              className="w-full h-[80vh] object-cover cursor-pointer"
              onMouseEnter={() => setid(p.id)}
              onMouseLeave={() => setid(null)}
            />
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3>{p.title}</h3>
                <p>${p.price}</p>
              </div>
              <FaRegHeart className="cursor-pointer" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Products;
