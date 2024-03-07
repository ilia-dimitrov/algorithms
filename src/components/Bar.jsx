import React from "react";
import "../components/Bar.css";

const Bar = ({ num, className }) => {
  return (
    <div
      className={`bar ${className}`}
      style={{
        height: `${num * 130}%`,
      }}
    ></div>
  );
};

export default Bar;
