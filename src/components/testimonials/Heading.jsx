import React from "react";

const Heading = () => {
  return (
    <div className="clash_heading mt-[192px] mb-[64px] l:text-[60px] md:text-[44px] sm:text-[28px] sm:mb-[20px]">
      <div className="text-[#0f0f0f] textWhiteStroke">what my</div>
      <div
        className={` transition-all  delay-[1000ms] duration-700 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]`}
      >
        clients say
      </div>
    </div>
  );
};

export default Heading;
