import React from "react";
import "./Text.css";

const Text = ({ heading, textMain, sub }) => {
  return (
    <div className="Text">
      <div className="content">
        <h4>{heading}</h4>
        <p>{textMain}</p>
        <br />
        <p>{sub}</p>
      </div>
    </div>
  );
};

export default Text;
