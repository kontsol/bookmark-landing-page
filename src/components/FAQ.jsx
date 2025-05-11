import React, { useState } from "react";
import { FAQ_DATA } from "../Global";
import icon_arrow from "../assets/images/icon-arrow.svg";
import Button from "./Button";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq block-gap paddingY section-wrapper">
      <div className="flex flex-col items-center content-gap">
        <h1 className="heading-md-500">Frequently Asked Questions</h1>
        <p className="textMaxWidth text-body text-center">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>

      {/* FAQ */}
      <div className="textMaxWidth mx-auto paddingY">
        {FAQ_DATA.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div key={index}>
              <div
                className={`${item.class} w-full flex justify-between paddingY border-b-1 border-b-[#b7b7b7]`}
              >
                <h1 className="hover:text-[#fa5757] cursor-pointer heading-sm-400">
                  {item.question}
                </h1>
                <button
                  className={`!duration-0 ${
                    activeIndex === index ? "rotate-180 " : ""
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <img src={icon_arrow} />
                </button>
              </div>
              <div
                className={`overflow-hidden ${
                  isActive
                    ? "max-h-[1000px] opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-body paddingY">{item.answer}</p>
              </div>
            </div>
          );
        })}
        <div className="paddingY flex justify-center">
          <Button variant="primary" text="More Info" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
