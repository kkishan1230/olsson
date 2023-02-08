import React from "react";
import Button from "./Button";

const LetsConnect = () => {
  return (
    <div className="py-[160px] text-center relative">
      <div className="smallTexts mb-[32px]">Contact</div>
      <div className="text-[128px] clash_semiBold tracking-wider uppercase textWhiteStroke text-[#0f0f0f] leading-[110%]">
        Let’s
      </div>
      <div className="text-[128px] clash_semiBold tracking-wider uppercase leading-[110%]">
        connect
      </div>
      <div className="w-fit mx-auto mt-[32px]">
        <Button text="GET IN TOUCH" />
      </div>
      <div className="absolute w-[300px] h-[300px] blur-[150px] bg-[#5C43D2] opacity-40 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
    </div>
  );
};

export default LetsConnect;
