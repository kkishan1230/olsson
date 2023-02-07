import React from "react";

const Services = ({ img, head, text }) => {
  return (
    <div className="flex gap-8">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <div className="text-[32px] leading-[44.8px] tracking-wider uppercase clash_semiBold">
          {head}
        </div>
        <div className="text-[20px] leading-[170%] satoshi_regular mt-[8px] opacity-70">
          {text}
        </div>
      </div>
    </div>
  );
};

export default Services;
