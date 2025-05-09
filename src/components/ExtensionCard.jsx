import React from "react";
import Button from "./Button";

const ExtensionCard = ({ title, text, image, index, alt }) => {
  return (
    <div
      className={`h-full rounded-lg shadow-xl/40  hover:shadow-2xl hover:shadow-[#fa5757] shadow-[#5368df] max-w-md w-full md:w-[19rem] mx-auto md:mx-0 hover:translate-y-[-5px] ${
        index === 1 ? "md:mt-10" : index === 2 ? "md:mt-20" : ""
      }`}
    >
      <div
        className={`flex-1 flex flex-col items-center justify-center px-5 py-4`}
      >
        <img src={image} alt={alt} className="w-20 h-20 mb-8" />
        <h1 className="heading-sm-500 mb-2">{title}</h1>
        <label className="text-body heading-xs-400 mb-10">{text}</label>
        <Button variant="primary" text="Add & Install Extension" />
      </div>
    </div>
  );
};

export default ExtensionCard;
