import React from "react";

const Button = ({ variant, text }) => {
  const baseStyles =
    "px-8 py-2 rounded-sm cursor-pointer shadow-xl border-2 border-transparent  ";

  const variantStyles = {
    primary: "heading-sm-400",
    danger:
      "bg-[#fa5757] hover:bg-[#f7f7f7] text-white hover:text-[#fa5757] hover:border-[#fa5757] heading-sm-400 ",
    white: "heading-sm-400",
    menu: "bg-transparent hover:bg-[#f7f7f7] w-full text-white hover:text-[#fa5757] border-white text-center py-4 heading-md-500 mt-10 hover:border-[#fa5757] ",
  };
  return (
    <div className={`${variantStyles[variant]} ${baseStyles}`}>{text}</div>
  );
};

export default Button;
