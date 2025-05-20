import React, { useState, useEffect } from "react";
import { HEADER, SOCIALS } from "../Global";
import logo from "../assets/images/logo-bookmark.svg";
import menu from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";
import Button from "./Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header paddingX pt-10 flexBetween w-full relative z-100 section-wrapper">
      <img src={logo} alt="header logo" />
      <div className="hidden md:flex items-center md:gap-8 xl:gap-15">
        <ul className="flex gap-8 md:gap-8 xl:gap-15">
          {HEADER.map((item, index) => (
            <li
              className="heading-sm-400 hover:text-[#ff4c4c] text-[#252b46] cursor-pointer"
              key={index}
            >
              {item.text}
            </li>
          ))}
        </ul>
        <Button variant="danger" text="LOGIN" />
      </div>
      <img
        src={menu}
        className="block md:hidden w-6 h-6 cursor-pointer "
        alt="menu button"
        onClick={handleMenuToggle}
      />

      {/* Mobile menu */}
      {isOpen ? (
        <div className="fixed top-0 left-0 right-0 w-full h-screen -z-1 bg-[#252b46]/97 ">
          <img
            src={close}
            className="fixed top-10 right-10 w-6 h-6 z-[999] cursor-pointer"
            alt="close menu"
            onClick={handleMenuToggle}
          />
          <div className="absolute top-1/5 w-full px-10">
            <ul className="  flexCenter flex-col w-full">
              {HEADER.map((item, index) => (
                <li
                  className={`w-full py-8 text-center heading-sm-500 ${item.class} text-white hover:text-[#ff4c4c]`}
                  key={index}
                >
                  {item.text}
                </li>
              ))}
            </ul>
            <Button variant="menu" text="LOGIN" />
          </div>

          <div className="flexCenter gap-10 absolute bottom-1/6 left-0 right-0">
            {SOCIALS.map((item, index) => (
              <img
                src={item.icon}
                alt={item.alt}
                className="social-icon"
                key={index}
              />
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
