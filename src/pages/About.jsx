import React, { useRef } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

const About = () => {
  const swiperRef = useRef(null);

  const testimonials = [
    "Hub offers a range of skincare products that are feminine, delicate and long-lasting with vitamins and nutritions to improve your skin condition.",
    "Our products are crafted with the highest quality materials, ensuring durability and timeless elegance for every customer.",
    "Experience the perfect blend of tradition and modern design with our exclusive jewelry collection, designed for those who appreciate the finer things.",
  ];
  return (
    <div className="bg-[#FBF7F1] min-h-screen">
      <section className="py-20 px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-serif text-[rgb(65,56,30)] mb-6">
          OUR STORY
        </h2>
        <p className="max-w-md mx-auto text-gray-500 text-base md:text-sm leading-relaxed">
          Over 25 years of experience, we have crafted thousands of strategic
          discovery process that enables us to peel back the layers which enable
          us to understand, connect.
        </p>
      </section>

      <section className="w-full">
        <img
          src="/assets/images/about1.jpg"
          alt="Jewelry Showcase"
          className="w-full h-[500px] object-cover"
        />
      </section>

      <section className="py-20 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-[rgb(65,56,30)] mb-6 uppercase tracking-wider">
          Quality, <br />
          Consciousness, and <br />
          Versatile Design.
        </h2>
        <p className="max-w-2xl mx-auto text-gray-500 text-base md:text-base leading-relaxed mb-12">
          Over 25 years of experience, we have crafted thousands of strategic
          discovery process that enables us to peel back the layers which enable
          us to understand, connect, represent and dominate.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-start gap-8 max-w-7xl mx-auto mb-32 px-4 md:mt-10">
          <div className="w-full md:w-[22%] md:mt-48">
            <img
              src="/assets/images/ab2.jpg"
              alt="Detail 1"
              className="w-full h-auto object-cover shadow-sm"
            />
          </div>
          <div className="w-full md:w-[50%] md:mt-16 z-10">
            <img
              src="/assets/images/ab4.jpg"
              alt="Main Detail"
              className="w-full h-auto object-cover shadow-md"
            />
          </div>
          <div className="w-full md:w-[22%] md:-mt-10">
            <img
              src="/assets/images/ab3.jpg"
              alt="Detail 2"
              className="w-full h-auto object-cover shadow-sm"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-8 text-gray-500 text-sm md:text-sm text-left">
          <p>
            Over 25 years of experience, we have crafted thousands of strategic
            discovery process that enables us to peel back the layers which
            enable us to understand, connect, represent and dominate because we
            know just how hard it is to get the size, color and even the garment
            right in the fashion.
          </p>
          <p>
            The planet and your conscience will thank you. To help stem the flow
            of plastic into the ocean, we have committed to eliminating
            single-use plastic from the product range and food outlets by 2020.
          </p>
        </div>
      </section>
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="w-5 h-5 rounded-full border-2 border-[#A88B6E] mb-6 flex items-center justify-center"></div>
            <h3 className="text-base font-serif text-[rgb(65,56,30)] mb-4 uppercase tracking-widest">
              Original Products
            </h3>
            <p className="text-gray-600 text-sm md:text-sm leading-relaxed">
              Hub offers a range of skincare products that are feminine,
              delicate and long-lasting with vitamins and nutritions to improve
              your skin condition.
            </p>
            <div className="w-full h-[1px] bg-gray-600 mt-8"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-5 h-5 rounded-full border-2 border-[#A88B6E] mb-6 flex items-center justify-center"></div>
            <h3 className="text-base font-serif text-[rgb(65,56,30)] mb-4 uppercase tracking-widest">
              Limited Time Offers
            </h3>
            <p className="text-gray-600 text-sm md:text-sm leading-relaxed">
              Hub offers a range of skincare products that are feminine,
              delicate and long-lasting with vitamins and nutritions to improve
              your skin condition.
            </p>
            <div className="w-full h-[1px] bg-gray-600 mt-8"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-5 h-5 rounded-full border-2 border-[#A88B6E] mb-6 flex items-center justify-center"></div>
            <h3 className="text-base font-serif text-[rgb(65,56,30)] mb-4 uppercase tracking-widest">
              Free Shipping
            </h3>
            <p className="text-gray-600 text-sm md:text-sm leading-relaxed">
              Hub offers a range of skincare products that are feminine,
              delicate and long-lasting with vitamins and nutritions to improve
              your skin condition.
            </p>
            <div className="w-full h-[1px] bg-gray-600 mt-8"></div>
          </div>
        </div>
      </section>

      <section className="bg-[#965134] py-15 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 md:gap-32 mb-12 relative">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="text-2xl opacity-70 hover:opacity-100 transition-opacity z-20"
            >
              <BiChevronLeft />
            </button>

            <div className="max-w-2xl w-full">
              <Swiper
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                className="testimonial-swiper"
              >
                {testimonials.map((text, index) => (
                  <SwiperSlide key={index}>
                    <blockquote className="text-base md:text-lg leading-relaxed font-light tracking-wide px-8">
                      "{text}"
                    </blockquote>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="text-2xl opacity-70 hover:opacity-100 transition-opacity z-20"
            >
              <BiChevronRight />
            </button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-30 md:gap-48 opacity-90">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center mb-1">
                <span className="text-[10px] font-bold">29</span>
              </div>
              <span className="text-[10px] tracking-[0.2em] font-bold uppercase">
                REFINERY29
              </span>
            </div>
            <div className="text-4xl font-extrabold tracking-tighter uppercase font-serif">
              GQ
            </div>
            <div className="text-2xl font-bold tracking-[0.3em] uppercase">
              BYRDIE
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
