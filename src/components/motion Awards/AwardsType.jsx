import React from "react";

const AwardsType = ({ imgSrc, head, year, paddingTop, paddingBottom }) => {
  return (
    <div
      className={`flex justify-between items-center pt-[${paddingTop}px] pb-[${paddingBottom}px]`}
    >
      <div className="flex items-center">
        <div className="mr-[32px] sm:mr-4 sm:w-[30px] ">
          <img src={imgSrc} alt="" />
        </div>
        <div className="syne-heading sm:text-[14px]">{head}</div>
      </div>
      <div className="clash_semiBold text-[16px] tracking-wider leading-[100%] sm:text-[12px] ml-[20px]">
        {year}
      </div>
    </div>
  );
};

export default AwardsType;
