import React from "react";
import ClientsComments from "./ClientsComments";
import Heading from "./Heading";
import superFood from "../../images/superFood.svg";
import visionStudio from "../../images/visionStudio.svg";
import inMotion from "../../images/inMotion.svg";
import creativeStd from "../../images/creativeStudio.svg";
import inVision from "../../images/invisionSquare.svg";

const Testimonial = () => {
  return (
    <div className="max-w-[1720px] px-[60px] mx-[auto] mb-[192px] md:px-[30px] md:mb-[140px]">
      <Heading />
      <div className="flex  justify-between l:flex-wrap l:gap-[40px] md:mt-0">
        <div className="flex flex-col gap-8 w-[32%] l:w-[100%] l:flex-row md:flex-col">
          <ClientsComments
            heading="“Porta nibh venenatis cras sed felis eget velit aliquet sagittis.”"
            text="Ac tincidunt vitae semper quis lectus. Commodo elit at imperdiet dui accumsan sit. Integer vitae justo eget magna fermentum. "
            uName="Emily Smith"
            company="Super Food"
            imgLogo={superFood}
          />
          <ClientsComments
            heading="“Porta nibh venenatis cras sed felis eget velit aliquet sagittis.”"
            text="Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt. Eget gravida cum sociis natoque penatibus et. Sapien eget mi proin sed. Quam id leo in vitae turpis massa sed elementum.
          Scelerisque eleifend donec pretium vulputate sapien. Sodales ut etiam sit amet nisl purus in mollis."
            uName="Noah Brown"
            company="Motion Studio"
            imgLogo={visionStudio}
          />
        </div>
        <div className="flex flex-col gap-8 w-[32%] l:w-[100%] l:flex-row md:flex-col">
          <ClientsComments
            heading="“Velit sed ullamcorper morbi tincidunt”"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt."
            uName="Liam Johnson"
            company="Invision Studio"
            imgLogo={inMotion}
          />
          <ClientsComments
            heading="“Sodales ut etiam sit amet nisl purus”"
            text="Eget gravida cum sociis natoque penatibus et. Sapien eget mi proin sed. Quam id leo in vitae turpis massa sed elementum. Scelerisque eleifend donec pretium vulputate sapien. Sodales ut etiam sit amet nisl purus in mollis.

          Suspendisse faucibus interdum posuere lorem ipsum. Convallis posuere morbi leo urna molestie at elementum. Ut tellus elementum sagittis vitae."
            uName="Ava Jones"
            company="Video Creatives"
            imgLogo={creativeStd}
          />
        </div>
        <div className="flex flex-col gap-8 w-[32%] l:w-[100%] l:flex-row md:flex-col">
          <ClientsComments
            heading="“Porta nibh venenatis cras sed felis eget velit aliquet sagittis.”"
            text="Ac tincidunt vitae semper quis lectus. Commodo elit at imperdiet dui accumsan sit. Integer vitae justo eget magna fermentum. "
            uName="Olivia Williams"
            company="Vision Square"
            imgLogo={inVision}
          />
          <ClientsComments
            heading="“Porta nibh venenatis cras sed felis eget velit aliquet sagittis.”"
            text="Suspendisse faucibus interdum posuere lorem ipsum. Convallis posuere morbi leo urna molestie at elementum. Ut tellus elementum sagittis vitae. Ac tincidunt vitae semper quis lectus. Commodo elit at imperdiet dui accumsan sit. Integer vitae justo eget magna fermentum. "
            uName="Isabella Davis"
            company="Invision Square"
            imgLogo={inVision}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
