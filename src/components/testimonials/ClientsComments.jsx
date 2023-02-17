import { useInView } from "framer-motion";
import React from "react";
import { useRef } from "react";
const ClientsComments = ({ heading, text, company, uName, imgLogo }) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div
      className=" p-[48px] border-solid border-[1px] border-[rgba(255,255,255,0.12)] l:w-[50%] md:w-[100%] sm:p-[20px]"
      ref={ref}
    >
      <div
        className={`mb-[32px] w-[65px] transition-all duration-500 delay-500 sm:w-[40px] animate-bounce ${
          inView ? "none opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        <img src={imgLogo} alt="" />
      </div>
      <div
        className={`md:translate-x-[0px]  transition-all duration-700 delay-500 syne-heading mb-[16px] sm:text-[16px] ${
          inView
            ? "translate-x-0 opacity-100  md:translate-y-0 "
            : "translate-x-[100px] opacity-0 md:translate-y-[20px]"
        }`}
      >
        {heading}
      </div>
      <div
        className={`md:translate-x-[0px]  transition-all duration-700 delay-[900ms] mb-[32px] satoshi-para sm:text-[12px] ${
          inView
            ? "translate-x-0 opacity-100  md:translate-y-0 "
            : "translate-x-[100px] opacity-0 md:translate-y-[20px]"
        }`}
      >
        {text}
      </div>
      <div
        className={`md:translate-x-[0px] transition-all duration-700 delay-[1100ms] ${
          inView
            ? "translate-x-0 md:translate-y-0 opacity-100"
            : "translate-x-[100px] opacity-0 md:translate-y-[20px]"
        }`}
      >
        <div className="clash_semiBold mb-[4px]">{uName}</div>
        <div className="smallTexts opacity-70">{company}</div>
      </div>
    </div>
  );
};

export default ClientsComments;
