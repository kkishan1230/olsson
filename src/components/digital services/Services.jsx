import { useInView } from "framer-motion";
import React from "react";
import { useRef } from "react";

const Services = ({ img, head, text }) => {
  const textRef = useRef(null);
  const inView = useInView(textRef);
  return (
    <div className="flex gap-8 md:gap-4 sm:flex-col sm:items-center sm:px-[10px]">
      <div className="md:w-[48px]">
        <img src={img} alt="" />
      </div>
      <div className="md:flex-1 sm:w-[100%]">
        <div className="text-[32px] leading-[44.8px] tracking-wider uppercase clash_semiBold md:text-[24px] sm:text-[18px] sm:text-center">
          {head}
        </div>
        <div
          className={`text-[20px] leading-[170%] transition-all duration-1000 satoshi_regular mt-[8px] opacity-70 md:text-[18px] sm:text-[14px] sm:text-center ${
            inView ? "none opacity-1" : "translate-y-[50px] opacity-0"
          }`}
          ref={textRef}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default Services;
