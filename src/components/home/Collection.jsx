import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import React, { useEffect, useRef, useState } from "react";
gsap.registerPlugin(SplitText);

const Btn = ({ text }) => (
  <button className="px-10 py-4 rounded bg-[#F4EFE9] hover:bg-black hover:text-white cursor-pointer transition-all duration-300">
    {text}
  </button>
);

const Catext = (props) => {
  return (
    <h3
      className={`${props.class} text-3xl text-[#a29a8b] pb-6 border-b w-4/5 last-of-type:border-b-0 flex items-center`}
    >
      <img src="./assets/icons/ring.svg" alt="" className="icon" />
      {props.text}
    </h3>
  );
};
const Collection = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!imgRef.current) return;

      const rect = imgRef.current.getBoundingClientRect();

      // Mouse position relative to image
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Clamp values inside image
      const clampedX = Math.max(0, Math.min(x, rect.width));
      const clampedY = Math.max(0, Math.min(y, rect.height));

      // Normalize (-1 to 1)
      const xPercent = (clampedX / rect.width - 0.5) * 2;
      const yPercent = (clampedY / rect.height - 0.5) * 2;

      gsap.to(imgRef.current, {
        rotateY: xPercent * 3,
        rotateX: yPercent * -3,
        skewX: xPercent * 1.1,
        skewY: yPercent * 1.1,
        transformPerspective: 800,
        transformOrigin: "center",
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const reset = () => {
      gsap.to(imgRef.current, {
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    const img = imgRef.current;
    img.addEventListener("mousemove", handleMouseMove);
    img.addEventListener("mouseleave", reset);

    return () => {
      img.removeEventListener("mousemove", handleMouseMove);
      img.removeEventListener("mouseleave", reset);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".container h3.split");

    const splitInstances = [];

    elements.forEach((el) => {
      const split = SplitText.create(el, { type: "words,chars" });
      splitInstances.push(split);

      const img = el.querySelector("img");

      const tl = gsap.timeline({ paused: true });

      // Animate chars
      tl.fromTo(
        split.chars,
        { x: 0 },
        {
          x: 20,
          autoAlpha: 1,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.out",
        },
      );

      // Animate img (if exists)
      if (img) {
        tl.fromTo(
          img,
          { opacity: 0 },
          { opacity: 1, x: 10, duration: 0.3, ease: "power2.out" },
        );
      }

      el.addEventListener("mouseenter", () => tl.restart());
      el.addEventListener("mouseleave", () => tl.reverse());
    });

    return () => {
      splitInstances.forEach((split) => split.revert());
    };
  }, []);

  return (
    <div className="flex flex-col gap-6 items-center justify-center py-20 px-10 overflow-hidden">
      <span className="w-fit p-2 rounded border text-xs ">
        Materials and Categories
      </span>
      <h2 className="text-4xl  uppercase">Shop by collection</h2>
      <p className="w-3/5 mx-auto text-center text-gray-500">
        From dazzling diamonds to lustrous pearls, each gemstone is meticulously
        selected and expertly set to create stunning masterpieces that you'll
        cherish for a lifetime.
      </p>
      <div className="flex item-center gap-2 ">
        <Btn text="Accessories" />
        <Btn text="Blazers" />
        <Btn text="Jackets" />
        <Btn text="Braclets" />
        <Btn text="Earings" />
        <Btn text="Necklaces" />
        <Btn text="Rings" />
        <Btn text="Trousers" />
      </div>
      <div className="flex items-center gap-5 w-full justify-center">
        <div className="flex flex-col  w-1/2 py-22 gap-7 container">
          <Catext text="Bracelet" class="split" />
          <Catext text="Rings" class="split" />
          <Catext text="Necklace" class="split" />
          <Catext text="Earrings" class="split" />
          <Catext text="Shop all" class="split" />
        </div>
        <img
          src="./assets/images/collection.jpg"
          alt=""
          className="rounded-lg  w-1/2 object-cover img"
          ref={imgRef}
        />
      </div>
    </div>
  );
};

export default Collection;
