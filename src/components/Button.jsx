import React from "react";

const Button = ({ variant, text, className }) => {
  const baseStyles =
    "px-4 lg:px-8 py-3 rounded-sm cursor-pointer shadow-[0px_4px_4px_rgba(0,0,0,0.25)] border-2 border-transparent  ";

  const variantStyles = {
    primary:
      "heading-sm-500 bg-[#5368df] hover:bg-[#f7f7f7] text-[#f7f7f7] hover:text-[#5368df] hover:border-[#5368df] ",
    danger:
      "bg-[#fa5757] hover:bg-[#f7f7f7] text-white hover:text-[#fa5757] hover:border-[#fa5757] heading-sm-400 ",
    white: "heading-sm-500 bg-[#f7f7f7] text-[#252b46] hover:border-[#252b46]",
    menu: "bg-transparent hover:bg-[#f7f7f7] w-full text-white hover:text-[#fa5757] border-white text-center py-4 heading-sm-500 mt-10 hover:border-[#fa5757] ",
  };
  return (
    <div className={`${variantStyles[variant]} ${baseStyles} ${className}`}>
      {text}
    </div>
  );
};

export default Button;
