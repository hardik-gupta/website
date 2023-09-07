// GraduationHat.js
import React from "react";

const GraduationHat = ({ style, rotation }) => {
  return (
    <div
      className="graduation-hat"
      style={{ ...style, transform: `rotate(${rotation}deg)` }}
    ></div>
  );
};

export default GraduationHat;
