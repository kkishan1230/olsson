import React from "react";
import man from "../images/person.png";
import girlImg2 from "../images/girlimg2.png";
import yellowImg from "../images/yellow.png";
import pool from "../images/pool.png";
import car from "../images/car.png";
import mobile from "../images/watchingMobile.png";
import smoke from "../images/smoke.png";
import girlImg3 from "../images/girlimg3.png";
import userImg from "../images/userImage.png";

const ImagesGrid = () => {
  return (
    <div className="relative  h-[62.5vw] flex overflow-hidden">
      <div className="gridBg absolute"></div>
      <div className="flex gap-[34px] justify-center absolute left-[50%] translate-x-[-50%] min-w-[1920px] md:min-w-[100%] md:gap-2 ">
        <div className="flex flex-col gap-8 mt-[64px] md:mt-[32px] md:gap-2">
          <div>
            <img
              src={man}
              alt=""
              className="rounded-[16px] opacity-80 l:rounded-[4px]"
            />
          </div>
          <div></div>
          <div>
            <img
              src={girlImg2}
              alt=""
              className="rounded-[16px] opacity-80 l:rounded-[4px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 md:gap-2">
          <div>
            <img
              src={yellowImg}
              alt=""
              className="rounded-[16px] opacity-80 l:rounded-[4px]"
            />
          </div>
          <div>
            <img
              src={pool}
              alt=""
              className="rounded-[16px] opacity-80 l:rounded-[4px]"
            />
          </div>
          <div>
            <img
              src={car}
              alt=""
              className="rounded-[16px] opacity-80 l:rounded-[4px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-[64px] md:mt-[32px] md:gap-2">
          <div>
            <img
              src={mobile}
              alt=""
              className="rounded-[16px] opacity-80 l:rounded-[4px]"
            />
          </div>
          <div>
            <img
              src={smoke}
              alt="this is test"
              className="rounded-[16px] opacity-80"
            />
          </div>
          <div>
            <img
              src={girlImg3}
              alt=""
              className="rounded-[16px] opacity-80 l:rounded-[4px]"
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1720px] px-[60px] mx-auto relative h-fit self-end z-[2] l:self-center md:w-[480px] md:px-[30px]">
        <div className="flex items-center gap-8 mb-8 l:gap-2">
          <div>
            <img
              src={userImg}
              alt=""
              className="rounded-[8px] l:rounded-[4px]"
            />
          </div>
          <div>
            <div className="syne-heading text-white">LYNN OLSSON</div>
            <div className="smallTexts opacity-70">Visual ARt Director</div>
          </div>
        </div>
        <div className="text-[80px] leading-[130%] tracking-wider clash_regular l:text-[48px] md:text-[21px]">
          Creating captivating video and motion designs that tell your brand's
          story and are sure to grab the attention of your audience.
          <span className="textWhiteStroke text-transparent cursor-pointer font-clash_semibold opacity-80">
            Explore ↓
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImagesGrid;
