import React from "react";
import lynn from "../images/Lynn.png";
import olsson from "../images/olsson.png";

const CompanyName = () => {
  return (
    <div className="flex max-w-[1920px] gap-[80px] mx-auto mt-[64px] px-[60px] l:max-w-[960px] md:px-[30px]">
      <div>
        <img src={lynn} alt="" />
      </div>
      <div>
        <img src={olsson} alt="" />
      </div>
    </div>
  );
};

export default CompanyName;
