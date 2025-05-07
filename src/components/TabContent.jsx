import React from "react";
import Button from "./Button";

const Hero = ({ title, text, image }) => {
  return (
    <div className="flex flex-col md:flex-row gap-30 md:gap-10 paddingX block-gap">
      <div className="flex-1 relative">
        <div
          className="absolute top-[15%] -left-[30%] w-full h-full bg-blue-600 rounded-tr-[100px] rounded-br-[100px] rounded-tl-0 rounded-bl-0 z-[-1]"
          aria-hidden="true"
        ></div>
        <img
          src={image}
          alt="features image"
          className="!h-[18rem] md:!h-[25rem]"
        />
      </div>
      <div className="flex-1 flexCenter flex-col md:!items-start text-center md:text-left content-gap">
        <h1 className="heading-lg-500 max-w-xl w-full ">{title}</h1>
        <p className="text-body text-[#252b46] max-w-xs sm:max-w-md w-full ">
          {text}
        </p>
        <Button variant="primary" text="More Info" />
      </div>
    </div>
  );
};

export default Hero;
