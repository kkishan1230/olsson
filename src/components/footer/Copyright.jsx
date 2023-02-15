import React from "react";

const Copyright = () => {
  return (
    <div className="flex mx-auto max-w-[1920px] px-[60px] justify-between py-8 sm:flex-wrap sm:gap-4 sm:px-[10px] bg-[rgba(53,134,255,0.85)]">
      <div className="smallTexts sm:text-center">
        © 2022 Made by Pawel Gola. Powered by Webflow.
      </div>
      <div className="flex gap-[32px] smallTexts opacity-70 sm:justify-between sm:w-[60%] sm:mx-auto">
        <div>Privacy</div>
        <div>Imprint</div>
      </div>
    </div>
  );
};

export default Copyright;
