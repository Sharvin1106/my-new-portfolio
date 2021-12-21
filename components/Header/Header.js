import Link from "next/link";
import React from "react";
import { DiCssdeck } from "react-icons/di";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div class="grid grid-cols-5 grid-rows-hero sm:grid-rows-hero-sm p-4 pt-8 gap-x-8 sm:gap-x-2 sm:gap-y-2">
      <div class="flex flex-row content-center grid-header-logo sm:grid-header-logo-sm">
        <Link href="/">
          <a class="flex items-center text-white mb-20"><DiCssdeck size="3rem" /> <span>Portfolio</span></a>
        </Link>
      </div>
    </div>
  );
}

export default Header;
