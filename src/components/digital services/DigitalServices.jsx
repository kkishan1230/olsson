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
import { NavLink } from "react-router-dom";
import { useInView } from "framer-motion";
import { useRef } from "react";

const DigitalServices = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const digiRef = useRef(null);
  const digiView = useInView(digiRef);

  return (
    <div className="max-w-[1920px] mx-auto px-[60px] sm:px-[10px] sm:mt-[80px]">
      <div className="flex items-center justify-between mt-[160px] l:mt-0 l:flex-col l:gap-[40px]">
        <div className="smallTexts w-fit mr-[120px] l:mr-0 l:text-[24px] md:text-[18px] sm:text-[12px]">
          Clients I’Ve worked with
        </div>
        <div
          className={`flex max-w-[1265px]  justify-end gap-10 items-center flex-1 l:w-[100%] md:flex-wrap l:justify-center transition-all duration-[1.5s] md:translate-x-0 ${
            inView ? "none l:opacity-1" : "l:translate-x-[200px] l:opacity-0"
          } ${
            inView
              ? "none xl:opacity-1"
              : "xl:translate-x-[-200px] xl:opacity-0"
          }`}
          ref={ref}
        >
          <div
            className={`cursor-pointer  transition-all duration-[2000ms] ${
              inView ? "none" : "l:rotate-[20deg]"
            } ${inView ? "none" : "xl:rotate-[-20deg]"}`}
          >
            <div className="oscillate">
              <img src={superFood} alt="" className="enlarge_animation" />
            </div>
          </div>
          <div
            className={`cursor-pointer  transition-all duration-[2000ms] ${
              inView ? "none" : "l:rotate-[20deg]"
            } ${inView ? "none" : "xl:rotate-[-20deg]"}`}
          >
            <img src={creativeStd} alt="" className="enlarge_animation" />
          </div>
          <div
            className={`cursor-pointer  transition-all duration-[2000ms] ${
              inView ? "none" : "l:rotate-[20deg]"
            } ${inView ? "none" : "xl:rotate-[-20deg]"}`}
          >
            <img src={inMotion} alt="" className="enlarge_animation" />
          </div>
          <div
            className={`cursor-pointer  transition-all duration-[2000ms] ${
              inView ? "none" : "l:rotate-[20deg]"
            } ${inView ? "none" : "xl:rotate-[-20deg]"}`}
          >
            <img src={abstract} alt="" className="enlarge_animation" />
          </div>
          <div
            className={`cursor-pointer  transition-all duration-[2000ms] ${
              inView ? "none" : "l:rotate-[20deg]"
            } ${inView ? "none" : "xl:rotate-[-20deg]"}`}
          >
            <img src={visionStd} alt="" className="enlarge_animation" />
          </div>
          <div
            className={`cursor-pointer  transition-all duration-[2000ms] ${
              inView ? "none" : "rotate-[20deg]"
            }`}
          >
            <img src={invisionSq} alt="" className="enlarge_animation" />
          </div>
        </div>
      </div>
      <div
        className="flex mt-[192px] l:justify-between md:flex-col md:items-center md:gap-[40px] md:mt-[120px]"
        ref={digiRef}
      >
        <div
          className={`w-[50%] clash_heading l:text-[54px] l:w-[40%] md:w-[100%] transition-all duration-1000 ${
            digiView ? "none" : "translate-x-[-100px]"
          }`}
        >
          <div className="text-[#0f0f0f] textWhiteStroke md:text-center md:text-[32px] md:leading-[32px] sm:text-[22px]">
            digital
          </div>
          <div className="md:text-center md:text-[32px] md:leading-[32px] sm:text-[24px]">
            services
          </div>
          <NavLink
            to="/"
            className="smallTexts uppercase  border-b-[1px] pb-[2px]  w-fit mt-8  md:text-center sm:mt-[20px] hover:text-[#5c43d2] transition-all duration-200 block md:mx-auto hover:pr-[20px] hover:border-[#5c43d2]"
          >
            Explore Services
          </NavLink>
        </div>
        <div className="w-[50%] flex flex-col gap-[96px] l:w-[60%] md:w-[480px] md:px-[30px] md:gap-[64px] sm:w-[100%]">
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
