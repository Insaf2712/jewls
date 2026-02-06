import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SlideImage = ({ src, alt, isVisible }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    if (!imgRef.current) return;

    if (isVisible) {
      gsap.fromTo(
        imgRef.current,
        { scale: 1 },
        {
          scale: 1.2,
          duration: 4,
          ease: "power2.out",
        },
      );
    } else {
      gsap.set(imgRef.current, { scale: 1 });
    }
  }, [isVisible]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
    />
  );
};

const HeaderContent = () => {
  return (
    <section className="col-span-2 row-span-3 flex flex-col h-full w-full">
      <div className="relative w-full h-3/5">
        <img
          src="./assets/images/header-rings.jpg"
          alt=""
          className="absolute w-full h-full top-0 left-0 object-cover -z-10"
        />
        <div className="absolute bottom-10 space-y-1 w-full h-fit px-10 text-white">
          <h1 className="text-4xl ">#BOHO COLLECTION</h1>
          <span className="text-gray-300 font-semibold">Starting from £99</span>
        </div>
      </div>

      <div className="w-full h-2/5! relative overflow-hidden ">
        <Swiper
          slidesPerView={1}
          modules={[Autoplay, EffectFade]}
          autoplay={{
            delay: 4800,
            disableOnInteraction: false,
          }}
          loop
          watchSlidesProgress
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          className="w-full h-full"
        >
          <SwiperSlide className="overflow-hidden">
            {({ isActive }) => (
              <SlideImage
                src="./assets/images/necklace.jpg"
                alt=""
                isVisible={isActive}
              />
            )}
          </SwiperSlide>

          <SwiperSlide className="overflow-hidden">
            {({ isActive }) => (
              <SlideImage
                src="./assets/images/header-earings.jpg"
                alt=""
                isVisible={isActive}
              />
            )}
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HeaderContent;
