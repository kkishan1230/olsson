import React from "react";

const ImageCard = ({ subHead, head, img }) => {
  return (
    <div className="relative">
      <img src={img} alt="" className="rounded-[8px]" />
      <div
        className={`absolute bottom-[64px] left-[64px] md:left-[20px] md:bottom-[20px]`}
      >
        <div className="text-[32px] leading-[138%] clash_regular uppercase mb-[4px] md:text-[20px]">
          {head}
        </div>
        <div className="smallTexts opacity-70">{subHead}</div>
      </div>
      <div className="absolute uppercase w-[100px] h-[100px] rounded-full border-solid border-[1px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center backdrop-blur-[15px] md:w-[60px] md:h-[60px]">
        view
      </div>
    </div>
  );
};

const ImageCard2 = ({ subHead, head, img }) => {
  return (
    <div className="relative">
      <img src={img} alt="" className="rounded-[8px]" />
      <div
        className={`absolute bottom-[48px] left-[64px] md:left-[50%] md:bottom-[50%] md:translate-x-[-50%] md:translate-y-[50%]`}
      >
        <div className="text-[32px] leading-[138%] clash_regular uppercase mb-[4px] md:text-[20px]">
          {head}
        </div>
        <div className="smallTexts opacity-70">{subHead}</div>
      </div>
    </div>
  );
};

export { ImageCard, ImageCard2 };
