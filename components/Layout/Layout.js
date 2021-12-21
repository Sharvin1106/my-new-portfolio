import React from "react";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div
      style={{ backgroundColor: "#0F1624" }}
      class="max-w-screen-xl w-full m-auto layout-background"
    >
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
