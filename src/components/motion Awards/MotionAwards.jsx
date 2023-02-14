import React from "react";
import AwardsType from "./AwardsType";
import videoAwards from "../../images/videoAwards.svg";
import motionDesign from "../../images/motionDesigner.svg";
import videoMonth from "../../images/videoOfMonth.svg";
import artDir from "../../images/artDirectionAward.svg";
import { useRef } from "react";
import { useInView } from "framer-motion";

const MotionAwards = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div className="max-w-[1720px] px-[60px] mx-auto mt-[64px] md:px-[30px] sm:px-[10px]">
      <div className="uppercase smallTexts mx-auto transition-all duration-300 w-fit cursor-pointer hover:opacity-80 hover:text-[#5c43d2] hover:border-[#5c43d2] border-b-[1px] hover:px-[15px]">
        see all projects
      </div>
      <div className="flex mt-[192px] md:mt-[140px] md:flex-col md:items-center md:gap-[20px] sm:mt-[80px]  sm:gap-[30px]">
        <div className="w-[50%] uppercase l:w-[40%] md:w-[100%] " ref={ref}>
          <div
            className={`duration-500 delay-500 transition-all text-[#0f0f0f] textWhiteStroke clash_heading l:text-[60px] md:text-center md:text-[36px] sm:text-[24px] ${
              inView
                ? "opacity-[1] translate-y-[0px]"
                : "opacity-0 translate-y-[-50px]"
            }`}
          >
            motion
          </div>
          <div
            className={`transition-all duration-500 delay-500 clash_heading l:text-[60px] md:text-center md:text-[42px] sm:text-[28px] ${
              inView
                ? "opacity-100 translate-y-[0px]"
                : "opacity-0 translate-y-[50px]"
            }`}
          >
            awards
          </div>
        </div>
        <div className="w-[50%] l:w-[60%] md:w-[100%]">
          <AwardsType imgSrc={videoAwards} head="video award" year="2022" />
          <hr className="my-[48px] opacity-[12%] sm:my-[20px]" />
          <AwardsType
            imgSrc={motionDesign}
            head="Motion designer of the year"
            year="2021"
          />
          <hr className="my-[48px] opacity-[12%] sm:my-[20px]" />
          <AwardsType
            imgSrc={videoMonth}
            head="Video of the month"
            year="2020"
          />
          <hr className="my-[48px] opacity-[12%] sm:my-[20px]" />
          <AwardsType imgSrc={artDir} head="Art Direction award" year="2019" />
        </div>
      </div>
    </div>
  );
};

export default MotionAwards;
