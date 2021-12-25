import React from "react";
import Image from "next/image";
import { SiNextdotjs, SiTailwindcss, SiStrapi } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <footer class="border-t border-gray-200">
      <div
        class="
          container
          flex flex-col flex-wrap
          px-4
          py-16
          mx-auto
          md:items-center
          lg:items-start
          md:flex-row md:flex-nowrap
        "
      >
        <div class="flex-shrink-0 w-64 mx-auto my-2 text-center md:mx-0 md:text-left">
          <a
            class="
              flex
              items-center
              justify-center
             text-white
              md:justify-start
            "
          >
            Built With
          </a>

          <div class="flex mt-4 lg:mt-2 md:justify-start sm:justify-center sm:items-center">
            <a class="mx-2">
              <SiNextdotjs size="1.5rem" />
            </a>
            <a class="mx-2">
              <SiTailwindcss size="1.5rem" />
            </a>
            <a class="mx-2">
              <SiStrapi size="1.5rem" />
            </a>
          </div>
        </div>
        <div class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <a
            class="
              flex
              items-center
              justify-center
              text-white
              md:justify-start
            "
          >
            Powered By
          </a>

          <div class="flex mt-4 lg:mt-2">
            <Image src="/images/exabytes.png" height={60} width={100} />
          </div>
        </div>
        <div class="justify-between w-full mt-4 text-center lg:flex">
          <div class="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 class="mb-2 tracking-widest text-white">Contact</h2>
            <ul class="mb-8 space-y-2 text-sm list-none">
              <li>
                <a class="text-white hover:text-gray-800">
                  <BsFillTelephoneFill size="0.5rem" />{" "}
                  <span>+601136055713</span>
                </a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">
                  <MdEmail size="0.5rem" /> sharvin.kogilavanan@gmail.com
                </a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Blogs</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Contact Us</a>
              </li>
            </ul>
          </div>
          <div class="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 class="mb-2 font-bold tracking-widest text-gray-900">
              Useful Links
            </h2>
            <ul class="mb-8 space-y-2 text-sm list-none">
              <li>
                <a class="text-gray-600 hover:text-gray-800">Home</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">About Us</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Blogs</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
