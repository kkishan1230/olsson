import React from "react";

const ImageCard = ({ subHead, head, img, bottom }) => {
  return (
    <div className="relative">
      <img src={img} alt="" className="rounded-[8px]" />
      <div className={`absolute bottom-[64px] left-[64px]`}>
        <div className="text-[32px] leading-[44px] clash_regular uppercase mb-[4px]">
          {head}
        </div>
        <div className="smallTexts opacity-70">{subHead}</div>
      </div>
      <div className="absolute uppercase w-[100px] h-[100px] rounded-full border-solid border-[1px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center backdrop-blur-[15px]">
        view
      </div>
    </div>
  );
};

const ImageCard2 = ({ subHead, head, img, bottom }) => {
  return (
    <div className="relative">
      <img src={img} alt="" className="rounded-[8px]" />
      <div className={`absolute bottom-[48px] left-[64px]`}>
        <div className="text-[32px] leading-[44px] clash_regular uppercase mb-[4px]">
          {head}
        </div>
        <div className="smallTexts opacity-70">{subHead}</div>
      </div>
    </div>
  );
};

export { ImageCard, ImageCard2 };
