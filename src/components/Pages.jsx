import React from "react";
import Landing from "../home/Landing";
import About from "../home/About";
import Products from "../home/Products";

const Pages = () => {
  return (
    <div className="px-10 md:px-16 max-w-7xl mx-auto   sm:px-24    ">
      <Landing />
      <Products />
      {/* <About /> */}
    </div>
  );
};

export default Pages;
