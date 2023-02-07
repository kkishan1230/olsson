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
    <div className="max-w-[1800px] mx-auto">
      <div className="flex  justify-between  items-center mt-[160px]">
        <div className="smallTexts">Clients I’Ve worked with</div>
        <div className="flex max-w-[1265px] gap-[165px] items-center">
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
      <div className="flex mt-[192px]">
        <div className="w-[50%] text-[80px] leading-[110%] clash_semiBold uppercase">
          <div className="text-[#0f0f0f] textWhiteStroke">digital</div>
          <div>services</div>
          <div className="smallTexts uppercase underline mt-8 underline-offset-4">
            Explore Services
          </div>
        </div>
        <div className="w-[50%] flex flex-col gap-[96px]">
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
