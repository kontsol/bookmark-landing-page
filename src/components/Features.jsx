import React, { useState } from "react";
import { TAB_DATA } from "../Global";
import TabContent from "./TabContent";

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="features block-gap paddingY section-wrapper">
      <div className="flex flex-col items-center content-gap">
        <h1 className="heading-md-500">Features</h1>
        <p className="text-body textMaxWidth text-center">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      {/* Tabs */}
      <div className="px-15 md:px-0 flex flex-col md:flex-row justify-between mx-auto max-w-[800px]">
        {TAB_DATA.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={`flex-1 paddingY border-b-2 md:border-b-3 border-b-[#b7b7b7] relative heading-sm-400 hover:text-[#fa5757] ${
                activeTab === index ? "border-b-[#fa5757] text-[#fa5757]" : ""
              } `}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <TabContent
        title={TAB_DATA[activeTab].title}
        text={TAB_DATA[activeTab].text}
        image={TAB_DATA[activeTab].image}
      />
    </div>
  );
};

export default Features;
