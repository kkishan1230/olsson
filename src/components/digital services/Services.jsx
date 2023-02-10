import React from "react";

const Services = ({ img, head, text }) => {
  return (
    <div className="flex gap-8 md:gap-4">
      <div className="md:w-[48px]">
        <img src={img} alt="" />
      </div>
      <div className="md:flex-1">
        <div className="text-[32px] leading-[44.8px] tracking-wider uppercase clash_semiBold md:text-[24px]">
          {head}
        </div>
        <div className="text-[20px] leading-[170%] satoshi_regular mt-[8px] opacity-70 md:text-[18px]">
          {text}
        </div>
      </div>
    </div>
  );
};

export default Services;
