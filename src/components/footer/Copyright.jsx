import React from "react";

const Copyright = () => {
  return (
    <div className="flex mx-auto max-w-[1800px] justify-between py-8 xl:px-[30px]">
      <div className="smallTexts">
        © 2022 Made by Pawel Gola. Powered by Webflow.
      </div>
      <div className="flex gap-[32px] smallTexts opacity-70">
        <div>Privacy</div>
        <div>Imprint</div>
      </div>
    </div>
  );
};

export default Copyright;
