import React from "react";
import Header from "../Header/Navbar";

const Layout = ({ children }) => {
  return (
    <div
      className="max-w-screen-xl w-full m-auto"
    >
      <main>{children}</main>
    </div>
  );
};

export default Layout;
