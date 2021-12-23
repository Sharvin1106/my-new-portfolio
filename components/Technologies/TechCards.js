import Image from "next/image";
import React from "react";

const TechCard = ({ title, logo }) => {
  return (
    <div className="flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg tech-background-grad max-w-sm mx-5 text-center w-60">
        <Image priority src={logo} width={50} height={50} />
        <h5 className="text-white text-xl tech-title leading-tight mb-2">
          {title}
        </h5>
      </div>
    </div>
  );
};

export default TechCard;
