import React from "react";
import Navbar from "../components/navs/Navbar";

const LayoutOne = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default LayoutOne;
