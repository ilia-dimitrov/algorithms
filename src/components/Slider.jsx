import React, { useState } from "react";

const Slider = ({ resetArray }) => {
  const [maxPrice, setMaxPrice] = useState(40); // Initial value for the slider

  const handleSliderChange = (e) => {
    const newElementsNum = parseInt(e.target.value);
    setMaxPrice(newElementsNum); // Update the value of the slider
    resetArray(newElementsNum); // Pass the new value to the resetArray function
  };

  return (
    <div className="wrapper">
      <input
        type="range"
        min={10}
        max={140}
        value={maxPrice}
        onChange={handleSliderChange}
      />
      <span>{maxPrice}</span>
    </div>
  );
};

export default Slider;
