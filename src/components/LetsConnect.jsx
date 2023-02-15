import { useInView } from "framer-motion";
import React from "react";
import { useRef } from "react";
import Button from "./Button";

const LetsConnect = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div className="py-[160px] text-center relative l:py-[100px] sm:py-[60px]">
      <div className="smallTexts mb-[32px]">Contact</div>
      <div
        className={`transition-all duration-700 delay-300 text-[128px] clash_semiBold tracking-wider uppercase textWhiteStroke text-[#0f0f0f] leading-[110%] l:text-[74px] md:text-[36px] sm:text-[24px] ${
          inView ? "" : "drop-shadow-[0_0_20px_rgba(255,255,255,1)]"
        }`}
        ref={ref}
      >
        Let’s
      </div>
      <div
        className={`transition-all duration-700 delay-500 text-[128px] clash_semiBold tracking-wider uppercase leading-[110%] l:text-[74px] md:text-[44px] sm:text-[28px]  ${
          inView ? "" : "drop-shadow-[0_0_20px_rgba(255,255,255,1)]"
        }`}
      >
        connect
      </div>
      <div className="w-fit mx-auto mt-[32px] sm:scale-75 cursor-pointer">
        <Button text="GET IN TOUCH" />
      </div>
      <div className="absolute w-[300px] h-[300px] blur-[150px] bg-[#5C43D2] opacity-40 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
    </div>
  );
};

export default LetsConnect;
