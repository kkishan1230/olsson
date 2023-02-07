import React from "react";
import CompanyName from "../CompanyName";
import DigitalServices from "../digital services/DigitalServices";
import ImageWithHead from "../images with heading/ImageWithHead";
import ImagesGrid from "../ImagesGrid";
import NavBar from "../NavBar";
import SelectedWork from "../SelectedWork";
import TopBar from "../TopBar";

const FrontPage = () => {
  return (
    <div>
      <TopBar />
      <NavBar />
      <hr className="border-b-[#ffffff] opacity-[12%] h-[1px]" />
      <CompanyName />
      <ImagesGrid />
      <DigitalServices />
      <SelectedWork />
      <ImageWithHead />
    </div>
  );
};

export default FrontPage;
