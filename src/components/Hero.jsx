import React from "react";
import heroImage from "../assets/images/illustration-hero.svg";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="hero flex flex-col-reverse md:flex-row gap-30 md:gap-10 paddingX block-gap section-wrapper">
      <div className="flex-1 flexCenter flex-col md:!items-start text-center md:text-left content-gap">
        <h1 className="heading-lg-500 max-w-xl w-full ">
          A Simple Bookmark Manager
        </h1>
        <p className="text-body text-[#252b46] textMaxWidth">
          A clean and simple interface to organize your favorite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex gap-4">
          <Button variant="primary" text="Get it on Chrome" />
          <Button variant="white" text="Get it on Firefox" />
        </div>
      </div>
      <div className="flex-1 relative">
        <div
          className="absolute top-[15%] -right-[25%] w-full h-full bg-blue-600 rounded-tl-[100px] rounded-bl-[100px] rounded-tr-0 rounded-br-0 z-[-1]"
          aria-hidden="true"
        ></div>
        <img src={heroImage} alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;
