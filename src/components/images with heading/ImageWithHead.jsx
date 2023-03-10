import React from "react";
import { ImageCard, ImageCard2 } from "./ImageCard";
import lady from "../../images/lady.png";
import smoke from "../../images/smoke2.png";
import smoking from "../../images/smoking.png";

const ImageWithHead = () => {
  return (
    <div className="max-w-[1920px] mx-auto mt-[96px] px-[60px] l:mt-[80px] md:px-[30px] sm:px-[10px] sm:mt-[50px]">
      <div>
        <ImageCard
          img={lady}
          head="cyberpunk"
          subHead="invision studio"
          bottom={64}
        />
      </div>
      <div className="flex mt-8 gap-8 sm:gap-2 sm:mt-2">
        <ImageCard2 img={smoke} head="cyberpunk" subHead="invision studio" />
        <ImageCard2 img={smoking} head="cyberpunk" subHead="invision studio" />
      </div>
    </div>
  );
};

export default ImageWithHead;
