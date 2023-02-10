import React from "react";
import Button from "./Button";

const LetsConnect = () => {
  return (
    <div className="py-[160px] text-center relative l:py-[100px] sm:py-[60px]">
      <div className="smallTexts mb-[32px]">Contact</div>
      <div className="text-[128px] clash_semiBold tracking-wider uppercase textWhiteStroke text-[#0f0f0f] leading-[110%] l:text-[74px] md:text-[36px] sm:text-[24px]">
        Let’s
      </div>
      <div className="text-[128px] clash_semiBold tracking-wider uppercase leading-[110%] l:text-[74px] md:text-[44px] sm:text-[28px]">
        connect
      </div>
      <div className="w-fit mx-auto mt-[32px] sm:scale-75">
        <Button text="GET IN TOUCH" />
      </div>
      <div className="absolute w-[300px] h-[300px] blur-[150px] bg-[#5C43D2] opacity-40 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
    </div>
  );
};

export default LetsConnect;
