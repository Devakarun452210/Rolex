import React from "react";
import "./Navbar.css";
import Logo from "../Logo";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="left">
        <i className="fa fa-bars"></i>
        <span>Menu</span>
      </div>
      <div className="center">
        <Logo className="logo" />
      </div>
      <div className="right">
        <i className="fa fa-search"></i>
        <i className="fa fa-location"></i>
        <i className="fa fa-heart"></i>
      </div>
    </div>
  );
};

export default Navbar;
