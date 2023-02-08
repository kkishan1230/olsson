import React from "react";
import man from "../images/person.png";
import hands from "../images/hands.png";
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
    <div className="relative  h-[1200px] flex overflow-hidden">
      <div className="gridBg absolute"></div>
      <div className="flex gap-[34px] justify-center absolute left-[50%] translate-x-[-50%] min-w-[1920px]">
        <div className="flex flex-col gap-8 mt-[64px]">
          <div>
            <img src={man} alt="" className="rounded-[16px] opacity-80" />
          </div>
          <div>
            <img src={hands} alt="" className="rounded-[16px] opacity-80" />
          </div>
          <div>
            <img src={girlImg2} alt="" className="rounded-[16px] opacity-80" />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <img src={yellowImg} alt="" className="rounded-[16px] opacity-80" />
          </div>
          <div>
            <img src={pool} alt="" className="rounded-[16px] opacity-80" />
          </div>
          <div>
            <img src={car} alt="" className="rounded-[16px] opacity-80" />
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-[64px]">
          <div>
            <img src={mobile} alt="" className="rounded-[16px] opacity-80" />
          </div>
          <div>
            <img src={smoke} alt="" className="rounded-[16px] opacity-80" />
          </div>
          <div>
            <img src={girlImg3} alt="" className="rounded-[16px] opacity-80" />
          </div>
        </div>
      </div>
      <div className="max-w-[1600px] mx-auto relative xl:max-w-[1660px] xl:px-[30px] h-fit self-end z-[2]">
        <div className="flex items-center gap-8 mb-8">
          <div>
            <img src={userImg} alt="" className="rounded-[8px]" />
          </div>
          <div>
            <div className="syne-heading text-white">LYNN OLSSON</div>
            <div className="smallTexts opacity-70">Visual ARt Director</div>
          </div>
        </div>
        <div className="text-[80px] leading-[130%] tracking-wider clash_regular">
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
