import React from "react";
import Button from "./Button";

const Newsletter = () => {
  return (
    <div className="block-gap paddingY section-wrapper bg-[#5368df] flex flex-col items-center justify-center content-gap">
      <h1 className="text-[#f7f7f7] heading-sm-500 tracking-[0.5rem]">
        35,000+ ALREADY JOINED
      </h1>
      <p className="textMaxWidth text-[#f7f7f7] text-center heading-md-500">
        Stay up-to-date with what we’re doing
      </p>
      <form className="flex flex-col md:flex-row justify-between content-gap w-full max-w-lg border-2 border-lime-400">
        <input
          className="bg-[#f7f7f7] rounded-sm flex-grow px-4 py-3"
          type="email"
          placeholder="Enter your email address"
        />

        <Button variant="danger" text="Contact Us" className="" />
      </form>
    </div>
  );
};

export default Newsletter;
