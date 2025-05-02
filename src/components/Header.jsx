import React, { useState } from "react";
import { HEADER } from "../Global";
import logo from "../assets/images/logo-bookmark.svg";
import menu from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="px-4 sm:px-0 pt-5 md:pt-10 flex items-center justify-between w-full relative z-100">
      <img src={logo} alt="header logo" className="" />
      <ul className="hidden md:flex gap-2">
        {HEADER.map((item, index) => (
          <li className="heading-sm-400 hover:text-[#ff4c4c]" key={index}>
            {item}
          </li>
        ))}
      </ul>
      <img
        src={isOpen ? close : menu}
        className="block md:hidden"
        alt="menu button"
        onClick={handleMenuToggle}
      />
      {/* Mobile menu */}
      {isOpen ? (
        <div className="absolute top-0 left-0 right-0 w-full -z-1 ">
          <ul className="px-6 h-screen bg-[#252b46ee] flex flex-col justify-center items-center gap-4 w-full">
            {HEADER.map((item, index) => (
              <li
                className="w-full py-6 text-center heading-md-400  border-t-1 border-t-white text-white hover:text-[#ff4c4c]"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
