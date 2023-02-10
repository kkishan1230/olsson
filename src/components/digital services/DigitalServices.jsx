import React from "react";
import superFood from "../../images/superFood.svg";
import creativeStd from "../../images/creativeStudio.svg";
import inMotion from "../../images/inMotion.svg";
import abstract from "../../images/abstract.svg";
import visionStd from "../../images/visionStudio.svg";
import invisionSq from "../../images/invisionSquare.svg";
import Services from "./Services";
import videoCreation from "../../images/videoCreation.svg";
import motionDesign from "../../images/motionDesign.svg";
import artDir from "../../images/artDirection.svg";
import socialM from "../../images/socialMedia.svg";

const DigitalServices = () => {
  return (
    <div className="max-w-[1920px] mx-auto px-[60px]">
      <div className="flex items-center justify-between mt-[160px] l:mt-0 l:flex-col l:gap-[40px]">
        <div className="smallTexts w-fit mr-[120px] l:mr-0 l:text-[24px] md:text-[18px]">
          Clients I’Ve worked with
        </div>
        <div className="flex max-w-[1265px] justify-center gap-8 items-center flex-1 l:w-[100%] md:flex-wrap">
          <div>
            <img src={superFood} alt="" />
          </div>
          <div>
            <img src={creativeStd} alt="" />
          </div>
          <div>
            <img src={inMotion} alt="" />
          </div>
          <div>
            <img src={abstract} alt="" />
          </div>
          <div>
            <img src={visionStd} alt="" />
          </div>
          <div>
            <img src={invisionSq} alt="" />
          </div>
        </div>
      </div>
      <div className="flex mt-[192px] l:justify-between md:flex-col md:items-center md:gap-[40px] md:mt-[120px]">
        <div className="w-[50%] clash_heading l:text-[54px] l:w-[40%] md:w-[100%]">
          <div className="text-[#0f0f0f] textWhiteStroke md:text-center md:text-[32px] md:leading-[32px]">
            digital
          </div>
          <div className="md:text-center md:text-[32px] md:leading-[32px]">
            services
          </div>
          <div className="smallTexts uppercase underline mt-8 underline-offset-4 md:text-center">
            Explore Services
          </div>
        </div>
        <div className="w-[50%] flex flex-col gap-[96px] l:w-[60%] md:w-[480px] md:px-[30px] md:gap-[64px]">
          <Services
            img={videoCreation}
            head="video creation"
            text="Quis risus sed vulputate odio ut. Semper quis lectus nulla at volutpat diam. Sagittis orci a scelerisque purus semper eget duis at. "
          />
          <Services
            img={motionDesign}
            head="Motion Design"
            text="Ac tincidunt vitae semper quis lectus. Commodo elit at imperdiet dui accumsan sit. Integer vitae justo eget magna fermentum. "
          />
          <Services
            img={artDir}
            head="Art Direction"
            text="Dolor magna eget est lorem ipsum dolor sit amet consectetur. Bibendum est ultricies integer quis auctor elit sed. Odio morbi quis commodo odio aenean sed."
          />
          <Services
            img={socialM}
            head="Art Direction"
            text="Ac tincidunt vitae semper quis lectus. Commodo elit at imperdiet dui accumsan sit. Integer vitae justo eget magna fermentum. "
          />
        </div>
      </div>
    </div>
  );
};

export default DigitalServices;
