import React from "react";
import "./Video.css";

const Video = ({ source }) => {
  return (
    <div className="Video">
      <video autoPlay controls>
        <source src={source} />
      </video>
    </div>
  );
};

export default Video;
