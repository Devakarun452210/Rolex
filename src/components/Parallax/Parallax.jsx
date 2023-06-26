import React from "react";
import "./Parallax.css";

const Parallax = ({ parallaxSource }) => {
  return (
    <div
      className="Parallax"
      style={{ backgroundImage: `url(${parallaxSource})` }}
    ></div>
  );
};

export default Parallax;
