import Image from "next/image";
import React from "react";

const TechCard = ({ attributes }) => {
  return (
    <div className="flex justify-center">
      <div
        style={{
          boxShadow: attributes.BoxShadow
            ? attributes.BoxShadow
            : "-4px -6px 78px 6px rgba(97,219,251,0.75)",
          WebkitBoxShadow: attributes.BoxShadow
            ? attributes.BoxShadow
            : "-4px -6px 78px 6px rgba(97,219,251,0.75)",
          MozBoxShadow: attributes.BoxShadow
            ? attributes.BoxShadow
            : "-4px -6px 78px 6px rgba(97,219,251,0.75)",
        }}
        className="block p-6 rounded-lg shadow-2xl tech-background-grad max-w-sm mx-5 text-center w-60"
      >
        <Image priority src={attributes.logo} width={50} height={50} />
        <h5 className="text-white tech-title mb-2">{attributes.title}</h5>
      </div>
    </div>
  );
};

export default TechCard;
