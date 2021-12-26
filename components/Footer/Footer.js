import React from "react";
import Image from "next/image";
import { SiNextdotjs, SiTailwindcss, SiStrapi } from "react-icons/si";
import {
  BsFacebook,
  BsTelephoneFill,
  BsLinkedin,
  BsGithub,
  BsInstagram,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const Footer = ({ github, linkedin, instagram, facebook }) => {
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
        <div class="flex-shrink-0 w-64 mx-auto mb-7 text-center md:mx-0 md:text-left">
          <a
            class="flex
              items-center
              justify-center
             text-white footer-title"
          >
            Built With
          </a>

          <div class="flex mt-4 lg:mt-2 justify-center items-center">
            <a target="_blank" href="https://nextjs.org/" class="mx-2">
              <SiNextdotjs size="1.5rem" />
            </a>
            <a target="_blank" href="https://tailwindcss.com/" class="mx-2">
              <SiTailwindcss size="1.5rem" />
            </a>
            <a target="_blank" href="https://strapi.io/" class="mx-2">
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
              footer-title
            "
          >
            Powered By
          </a>

          <div class="flex mt-2 lg:mt-2 items-center justify-center">
            <Image src="/images/exabytes.png" height={60} width={100} />
          </div>
        </div>
        <div class="justify-between w-full text-center lg:flex">
          <div class="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 class="mb-2 tracking-widest text-white footer-title">Contact</h2>
            <ul class="mb-8 space-y-2 text-sm list-none">
              <li>
                <a class="px-4 py-2 text-white inline-flex items-center space-x-2">
                  <BsTelephoneFill />
                  <span>+601136055713</span>
                </a>
              </li>
              <li>
                <a class="px-4 py-2 text-white inline-flex items-center space-x-2">
                  <MdEmail />
                  <span>sharvin.kogilavanan@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 class="mb-2 footer-title tracking-widest text-white">
              Social Contacts
            </h2>
            <div class="flex flex-col Sspace-x-3">
              <a
                href={linkedin ? linkedin : ""}
                target="_blank"
                class=" px-4 py-2 text-white inline-flex justify-center items-center space-x-2 rounded"
              >
                <BsLinkedin />
                <span>LinkedIn</span>
              </a>
              <a
                href={github ? github : ""}
                target="_blank"
                class=" px-4 py-2 text-white inline-flex justify-center items-center space-x-2 rounded"
              >
                <BsGithub />
                <span>Github</span>
              </a>
              <a
                href={instagram ? instagram : ""}
                target="_blank"
                class=" px-4 py-2 text-white inline-flex justify-center items-center space-x-2 rounded"
              >
                <BsInstagram />
                <span>Instagram</span>
              </a>
              <a
                href={facebook ? facebook : ""}
                target="_blank"
                class=" px-4 py-2 text-white inline-flex justify-center items-center space-x-2 rounded"
              >
                <BsFacebook />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
