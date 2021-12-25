import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="p-0 mt-20 mx-auto max-w-screen-lg box-content">
      <h2 className="section-title project-section-title w-max max-w-full mb-16px pt-58px px-0 pb-16px md:mb-12px md:pt-40px md:px-0 md:pb-12px sm:mb-8px sm:pt-16px sm:px-0 sm:pb-8px sm:max-w-full">
        About Me
      </h2>
      <div className="flex flex-wrap">
        <div className="flex justify-center items-center w-full md:w-1/2 h-screen overflow-hidden order-last lg:order-first md:order-first">
          <div className="flex justify-center items-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              scelerisque porta est vel laoreet. Proin enim eros, tempor eu
              elit.
            </p>
          </div>
        </div>

        <div className="bg-green w-full md:w-1/2 order-first lg:order-last md:order-last">
          <img
            className="object-bottom rounded"
            src="https://drive.google.com/uc?id=1PxwojH1kT783H8NQ2T6akmxGJ2YuX0Jw"
            data-aos="fade-up"
            alt="John Doe"
          />
        </div>
      </div>
    </section>
  );
};
export default About;
