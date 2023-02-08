import React from "react";
import { ImageCard, ImageCard2 } from "./ImageCard";
import lady from "../../images/lady.png";
import smoke from "../../images/smoke2.png";
import smoking from "../../images/smoking.png";

const ImageWithHead = () => {
  return (
    <div className="max-w-[1920px] mx-auto mt-[96px] px-[30px]">
      <div>
        <ImageCard
          img={lady}
          head="cyberpunk"
          subHead="invision studio"
          bottom={64}
        />
      </div>
      <div className="flex mt-8 gap-8">
        <ImageCard2 img={smoke} head="cyberpunk" subHead="invision studio" />
        <ImageCard2 img={smoking} head="cyberpunk" subHead="invision studio" />
      </div>
    </div>
  );
};

export default ImageWithHead;
