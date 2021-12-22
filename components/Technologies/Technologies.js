import React from "react";

const Technologies = () => {
  return (
    // <section
    //   className="flex flex-row p-0 my-20 mx-auto max-w-screen-lg box-content relative overflow-hidden tech-section-grid md:px-48px md:pt-24px md:pb-0 md:flex-col sm:p-0 sm:tech-section-grid-vw sm:flex-col"
    //   id="tech"
    // >
    //   <br />
    //   <h2 className="section-title w-max max-w-full mb-16px pt-58px px-0 pb-16px md:mb-12px md:pt-40px md:px-0 md:pb-12px sm:mb-8px sm:pt-16px sm:px-0 sm:pb-8px sm:max-w-full">
    //     Technologies
    //       </h2>

    <ul className=" tech-ul list-none grid gap-40px my-12 mx-0 lg:my-64px lg:mx-0 md:my-64px md:mx-0 md:gap-24px sm:flex sm:flex-col sm:my-32px sm:mx-0">
      <li className="flex flex-col md:tech-li-md sm:tech-li-sm sm:mb-14px sm:flex-row">
        <div className="flex flex-col sm:flex sm:ml-18px">
          <h4 className="tech-li-title md:tech-li-title-md sm:tech-li-title-sm">
            React
          </h4>
        </div>
      </li>
    </ul>
    // </section>
  );
};

export default Technologies;
