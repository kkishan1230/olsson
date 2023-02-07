import React from "react";
import CompanyName from "../CompanyName";
import ImagesGrid from "../ImagesGrid";
import NavBar from "../NavBar";
import TopBar from "../TopBar";

const FrontPage = () => {
  return (
    <div>
      <TopBar />
      <NavBar />
      <hr className="border-b-[#ffffff] opacity-[12%] h-[1px]" />
      <CompanyName />
      <ImagesGrid />
    </div>
  );
};

export default FrontPage;
