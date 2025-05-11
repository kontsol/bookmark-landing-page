import React from "react";
import { EXTENSION_DATA } from "../Global";

import ExtensionCard from "./ExtensionCard";

const Extension = () => {
  return (
    <div className="extension block-gap paddingY section-wrapper">
      <div className="text-center flex flex-col items-center content-gap">
        <h1 className="heading-md-500">Download the extension</h1>
        <p className="text-body textMaxWidth">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>

      {/* Extension Cards */}
      <div className="relative flex flex-col md:flex-row content-gap justify-center block-gap">
        {EXTENSION_DATA.map((item, index) => {
          return (
            <ExtensionCard
              key={index}
              title={item.title}
              text={item.text}
              image={item.image}
              alt={item.alt}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Extension;
