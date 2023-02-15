import React from "react";
import uImage from "../../images/userImage.png";
import Button from "../Button";
import ig from "../../images/ig.svg";
import twitter from "../../images/tw.svg";
import fb from "../../images/fbIcon.svg";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer max-w-[1920px] px-[60px] mt-[150px] py-[64px] mx-auto flex justify-between md:flex-col md:gap-[40px] md:px-[30px] bg-[rgba(53,134,255,0.85)] relative">
      <div className="waves">
        <div className="wave1 wave"></div>
        <div className="wave3 wave"></div>
        <div className="wave4 wave"></div>
        <div className="wave2 wave"></div>
      </div>
      <div className="flex flex-col justify-between gap-[24px]">
        <div className="flex items-center gap-[25px]">
          <div>
            <img src={uImage} alt="" className="rounded-[8px]" />
          </div>
          <div>
            <div className="syne-heading">lynn olsson</div>
            <div className="smallTexts opacity-70">Visual ARt Director</div>
          </div>
        </div>
        <div className="flex gap-2 md:gap-8">
          <div className="cursor-pointer transition-all duration-200 w-[50px] h-[50px] border-[1px] border-[rgba(255,255,255,0.12)] border-solid flex justify-center items-center rounded-full hover:translate-y-[-5px]">
            <img src={ig} alt="" className="w-[17px]" />
          </div>
          <div className="cursor-pointer transition-all duration-200 w-[50px] h-[50px] border-[1px] border-[rgba(255,255,255,0.12)] border-solid flex justify-center items-center rounded-full hover:translate-y-[-5px]">
            <img src={twitter} alt="" className="w-[17px]" />
          </div>
          <div className="cursor-pointer transition-all duration-200 w-[50px] h-[50px] border-[1px] border-[rgba(255,255,255,0.12)] border-solid flex justify-center items-center rounded-full hover:translate-y-[-5px]">
            <img src={fb} alt="" className="w-[17px]" />
          </div>
        </div>
      </div>

      <div className="max-w-[1222px] flex justify-between l:w-[70%] md:w-[100%] md:flex-wrap md:gap-[30px]">
        <div className="w-[375px] flex flex-col gap-8 l:w-auto sm:gap-4">
          <div className="footer_heading">pages</div>
          <NavLink to="/" className="smallTexts">
            Home
          </NavLink>
          <NavLink to="/" className="smallTexts">
            services
          </NavLink>
          <NavLink to="/" className="smallTexts">
            About
          </NavLink>
          <NavLink to="/" className="smallTexts">
            Contact
          </NavLink>
          <NavLink to="/">
            <Button text="more templates" bg="#fff" />
          </NavLink>
        </div>
        <div className="w-[375px] l:w-auto flex flex-col gap-8 sm:gap-4">
          <div className="footer_heading">CMS</div>
          <NavLink to="/" className="smallTexts">
            Projects
          </NavLink>
          <NavLink to="/" className="smallTexts">
            Project Single
          </NavLink>
          <NavLink to="/" className="smallTexts">
            Blog Post
          </NavLink>
          <NavLink to="/" className="smallTexts">
            Pricing
          </NavLink>
          <NavLink to="/" className="smallTexts">
            Shop Single
          </NavLink>
        </div>
        <div className="w-[375px] flex flex-col gap-8 l:w-auto sm:gap-4">
          <div className="footer_heading">Utility Pages</div>
          <NavLink to="/" className="smallTexts">
            404 Error Page
          </NavLink>
          <NavLink to="/" className="smallTexts">
            Password Protected
          </NavLink>
          <NavLink to="/" className="smallTexts">
            Styleguide
          </NavLink>
          <NavLink to="/" className="smallTexts">
            Licensing
          </NavLink>
          <NavLink to="/" className="smallTexts">
            Changelog
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
