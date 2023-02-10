import React from "react";
import AwardsType from "./AwardsType";
import videoAwards from "../../images/videoAwards.svg";
import motionDesign from "../../images/motionDesigner.svg";
import videoMonth from "../../images/videoOfMonth.svg";
import artDir from "../../images/artDirectionAward.svg";

const MotionAwards = () => {
  return (
    <div className="max-w-[1720px] px-[60px] mx-auto mt-[64px] md:px-[30px]">
      <div className="uppercase smallTexts underline underline-offset-[4px] text-center cursor-pointer hover:opacity-80">
        see all projects
      </div>
      <div className="flex mt-[192px] md:mt-[140px] md:flex-col md:items-center md:gap-[20px]">
        <div className="w-[50%] uppercase l:w-[40%] md:w-[100%]">
          <div className="text-[#0f0f0f] textWhiteStroke clash_heading l:text-[60px] md:text-center md:text-[36px]">
            motion
          </div>
          <div className="clash_heading l:text-[60px] md:text-center md:text-[42px]">
            awards
          </div>
        </div>
        <div className="w-[50%] l:w-[60%] md:w-[100%]">
          <AwardsType imgSrc={videoAwards} head="video award" year="2022" />
          <hr className="my-[48px] opacity-[12%]" />
          <AwardsType
            imgSrc={motionDesign}
            head="Motion designer of the year"
            year="2021"
          />
          <hr className="my-[48px] opacity-[12%]" />
          <AwardsType
            imgSrc={videoMonth}
            head="Video of the month"
            year="2020"
          />
          <hr className="my-[48px] opacity-[12%]" />
          <AwardsType imgSrc={artDir} head="Art Direction award" year="2019" />
        </div>
      </div>
    </div>
  );
};

export default MotionAwards;
