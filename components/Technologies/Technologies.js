import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";

const Technologies = () => {
  return (
      <ul className="list-none flex items-center gap-40px my-12 mx-0 lg:my-64px lg:mx-0 md:my-64px md:mx-0 md:gap-24px sm:flex sm:flex-col sm:my-32px sm:mx-0">
        <li className="inline-block md:tech-li-md sm:tech-li-sm sm:mb-14px sm:flex-row">
          <DiReact size="3rem" />
          <div className="flex flex-col sm:flex sm:ml-18px">
            <h4 className="tech-li-title md:tech-li-title-md sm:tech-li-title-sm tech-background-grad">
              React
            </h4>
          </div>
        </li>
        <li className="inline-block md:tech-li-md sm:tech-li-sm sm:mb-14px sm:flex-row">
          <DiReact size="3rem" />
          <div className="flex flex-col sm:flex sm:ml-18px">
            <h4 className="tech-li-title md:tech-li-title-md sm:tech-li-title-sm tech-background-grad">
              React
            </h4>
          </div>
        </li>
      </ul>
  );
};

export default Technologies;
