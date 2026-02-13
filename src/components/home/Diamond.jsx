import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { BiChevronRight } from "react-icons/bi";

const Diamond = () => {
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
  return (
    <section className="flex justify-between">
      <div className="flex flex-col gap-5 items-center w-1/2 ">
        <img src="../assets/icons/diamond.svg" alt="diamond" />
        <h3 className="text-4xl text-black w-1/2 text-center">
          HAND-CRAFTED JEWELRY.
        </h3>
        <p className="text-gray-500 text-md w-4/5 text-center">
          Each piece is a testament to the skill and artistry of our master
          craftsmen, blending traditional techniques with contemporary designs
          to create heirloom-quality jewelry that transcends trends.
        </p>
        <button className="border border-gray-300 rounded px-4 text-sm py-3 bg-white  flex items-center gap-3 cursor-pointer">
          Manufacturing Process <BiChevronRight />
        </button>
      </div>

      <div className="relative w-1/2 h-fit ">
        <img
          src="../assets/images/diamond1.jpg"
          alt=""
          className="absolute w-1/2 h-[70vh] object-cover top-0 left-0 z-10 rounded "
          ref={imgRef}
        />
        <img
          src="../assets/images/diamond.jpg"
          alt=""
          className="absolute w-1/2 h-[70vh] object-cover top-20 left-60 rounded "
        />
      </div>
    </section>
  );
};

export default Diamond;
