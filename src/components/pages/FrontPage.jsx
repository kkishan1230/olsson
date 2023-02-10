import React from "react";
import Marquee from "react-fast-marquee";
import CompanyName from "../CompanyName";
import DigitalServices from "../digital services/DigitalServices";
import Copyright from "../footer/Copyright";
import Footer from "../footer/Footer";
import ImageWithHead from "../images with heading/ImageWithHead";
import ImagesGrid from "../ImagesGrid";
import LetsConnect from "../LetsConnect";
import MotionAwards from "../motion Awards/MotionAwards";
import NavBar from "../NavBar";
import SelectedWork from "../SelectedWork";
import Testimonial from "../testimonials/Testimonial";
import TopBar from "../TopBar";

const FrontPage = () => {
  return (
    <div>
      <Marquee loop={0} className="bg-[#5C43D2]" gradient={false}>
        <TopBar />
        <TopBar />
        <TopBar />
        <TopBar />
        <TopBar />
        <TopBar />
        <TopBar />
        <TopBar />
        <TopBar />
      </Marquee>
      <NavBar />
      <hr className="border-b-[#ffffff] opacity-[12%] h-[1px]" />
      <CompanyName />
      <ImagesGrid />
      <DigitalServices />
      <Marquee gradient={false} speed={50}>
        <SelectedWork />
        <SelectedWork />
      </Marquee>
      <ImageWithHead />
      <MotionAwards />
      <Testimonial />
      <Marquee loop={0} className="bg-[#5C43D2]" gradient={false}>
        <TopBar />
        <TopBar />
        <TopBar />
        <TopBar />
        <TopBar />
        <TopBar />
        <TopBar />
        <TopBar />
        <TopBar />
      </Marquee>
      <LetsConnect />
      <hr className="border-b-[#ffffff] opacity-[12%] h-[1px]" />
      <Footer />
      <hr className="border-b-[#ffffff] opacity-[12%] h-[1px]" />
      <Copyright />
    </div>
  );
};

export default FrontPage;
