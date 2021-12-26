import Image from "next/image";
import React from "react";

const About = ({ introduction, profilePic }) => {
  return (
    <section
      id="about"
      className="md:p-0 p-4 mt-20 mx-auto max-w-screen-lg box-content"
    >
      <h2 className="section-title project-section-title w-max max-w-full mb-16px pt-58px px-0 pb-16px md:mb-12px md:pt-40px md:px-0 md:pb-12px sm:mb-8px sm:pt-16px sm:px-0 sm:pb-8px sm:max-w-full">
        About Me
      </h2>
      <div className="flex flex-wrap md:mt-0 mt-4">
        <div className="flex justify-center items-center w-full md:w-1/2 h-screen overflow-hidden order-last lg:order-first md:order-first">
          <div className="flex justify-center items-center md:pr-6 pr-0">
            <p className="about-para text-justify">{introduction}</p>
          </div>
        </div>

        <div className="bg-green w-full md:w-1/2 order-first lg:order-last md:order-last">
          <img
            className="object-bottom rounded"
            src={profilePic}
            data-aos="fade-up"
            alt="John Doe"
          />
        </div>
      </div>
    </section>
  );
};
export default About;
