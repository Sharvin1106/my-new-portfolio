import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center items-center flex-col pt-40 text-center font-bold lg:text-8xl text-6xl space-y-2">
      <Image src="/images/my-profile.jpg" height={144} width={144} />
      <h1 className="hero-font text-white pb-10">
        A Computer Science Student Passionate in <span className="hero-word">Machine Learning</span> &{" "}
        <span className="hero-word">Web Development</span>
      </h1>
      <div className="flex justify-center items-center cursor-pointer hover:shadow-lg  text-3xl font-semibold text-white bg-gray-900 rounded-lg w-64 h-16">
        <h1 className="text-center">Let's start 🚀 </h1>
      </div>
    </div>
  );
};

export default Hero;
