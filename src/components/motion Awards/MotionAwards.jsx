import React from "react";
import AwardsType from "./AwardsType";
import videoAwards from "../../images/videoAwards.svg";
import motionDesign from "../../images/motionDesigner.svg";
import videoMonth from "../../images/videoOfMonth.svg";
import artDir from "../../images/artDirectionAward.svg";

const MotionAwards = () => {
  return (
    <div className="max-w-[1600px] mx-auto mt-[64px] xl:px-[30px]">
      <div className="uppercase smallTexts underline underline-offset-[4px] text-center cursor-pointer hover:opacity-80">
        see all projects
      </div>
      <div className="flex mt-[192px]">
        <div className="w-[50%] uppercase text-[80px]">
          <div className="text-[#0f0f0f] textWhiteStroke clash_heading">
            motion
          </div>
          <div className="clash_heading">awards</div>
        </div>
        <div className="w-[50%]">
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
