import { useInView } from "framer-motion";
import React, { useRef } from "react";

const AwardsType = ({ imgSrc, head, year, paddingTop, paddingBottom }) => {
  const imgRef = useRef(null);
  const inView = useInView(imgRef);
  return (
    <div
      className={`flex justify-between items-center pt-[${paddingTop}px] pb-[${paddingBottom}px]`}
      ref={imgRef}
    >
      <div className="flex items-center">
        <div className={`mr-[32px] sm:mr-4 sm:w-[30px]`}>
          <img
            src={imgSrc}
            alt=""
            className={`transition-all delay-200  duration-700 ${
              inView ? "none scale-1" : "scale-0"
            }`}
          />
        </div>
        <div
          className={`transition-all delay-[800ms]  duration-500 syne-heading sm:text-[14px] ${
            inView ? "none scale-y-1 opacity-1" : "scale-y-0 opacity-0"
          }`}
        >
          {head}
        </div>
      </div>
      <div className="clash_semiBold text-[16px] tracking-wider leading-[100%] sm:text-[12px] ml-[20px]">
        {year}
      </div>
    </div>
  );
};

export default AwardsType;
