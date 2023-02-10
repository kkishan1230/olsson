import React from "react";
const ClientsComments = ({ heading, text, company, uName, imgLogo }) => {
  return (
    <div className=" p-[48px] border-solid border-[1px] border-[rgba(255,255,255,0.12)] l:w-[50%] md:w-[100%]">
      <div className="mb-[32px] w-[65px]">
        <img src={imgLogo} alt="" />
      </div>
      <div className="syne-heading mb-[16px]">{heading}</div>
      <div className="mb-[32px] satoshi-para">{text}</div>
      <div className="clash_semiBold mb-[4px]">{uName}</div>
      <div className="smallTexts opacity-70">{company}</div>
    </div>
  );
};

export default ClientsComments;
