import React, { useState } from "react";
import Button from "./Button";
import error from "../assets/images/icon-error.svg";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.value === "" || !validateEmail(email)) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
    }
  };

  console.log(errorMessage);

  return (
    <div className="block-gap paddingY bg-[#5368df]">
      <div className=" section-wrapper py-15 flex flex-col items-center justify-center content-gap">
        <h1 className="text-[#f7f7f7] heading-sm-500 tracking-[0.5rem]">
          35,000+ ALREADY JOINED
        </h1>
        <p className="textMaxWidth text-[#f7f7f7] text-center heading-md-500">
          Stay up-to-date with what we’re doing
        </p>
        <form
          onSubmit={handleSubmit}
          className={`flex flex-grow flex-col sm:flex-row justify-between ${
            errorMessage ? "gap-15" : "gap-5"
          } md:gap-6 w-full max-w-xl `}
        >
          <div className="relative flex-1 ">
            <input
              className={`z-1 bg-[#f7f7f7] rounded-md w-full px-4 py-3 heading-xs-400 fa5757 border-3 outline-none ${
                errorMessage ? "border-[#fa5757]" : "border-transparent"
              }`}
              type="text"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {errorMessage && (
              <img
                src={error}
                alt="error message"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 m-auto"
              />
            )}
            {errorMessage && (
              <p className="absolute bg-[#fa5757] -bottom-11 w-full p-3 rounded-b-lg text-[#f7f7f7]">
                Whoops, make sure it's an email
              </p>
            )}
          </div>
          <Button variant="danger" text="Contact Us" className="" />
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
