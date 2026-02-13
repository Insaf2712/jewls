import React from "react";
import "swiper/css";
import { slider } from "../../data";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="h-full w-full col-span-3 row-span-3"
    >
      {slider.map((s) => (
        <div className="relative w-full h-full  ">
          <SwiperSlide>
            <img
              src={s.img}
              alt=""
              className="absolute w-full h-full top-0 left-0 object-cover -z-10 "
            />
            <div className="flex flex-col gap-3 z-20  w-full  h-fit  my-auto text-white p-10 absolute bottom-25">
              <button className="px-3 py-2 rounded border border-gray-200 w-fit">
                Shop jewelry
              </button>
              <h1 className="text-4xl ">{s.title.toUpperCase()}</h1>
              <p className="text-gray-100">{s.text}</p>
            </div>
          </SwiperSlide>
        </div>
      ))}
    </Swiper>
  );
};

export default Slider;
