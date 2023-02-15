import React from "react";
import { useState } from "react";

const Heading = () => {
  const [isHover, setIsHover] = useState(false);
  const handleHover = () => {
    setIsHover(!isHover);
  };
  return (
    <div
      className="clash_heading mt-[192px] mb-[64px] l:text-[60px] md:text-[44px] sm:text-[28px] sm:mb-[20px] cursor-pointer w-fit"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div
        className={`transition-all duration-300 text-[#0f0f0f] textWhiteStroke ${
          isHover ? "pl-8" : "pl-0"
        }`}
      >
        what my
      </div>
      <div
        className={`transition-all duration-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] ${
          isHover ? "pl-[60px]" : "pl-0"
        }`}
      >
        clients say
      </div>
    </div>
  );
};

export default Heading;
