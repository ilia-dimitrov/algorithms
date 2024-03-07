import React, { useState } from "react";
import "./App.css";
import { generateRandomArray } from "./components/createArr";
import AlgorithmVisualizer from "./components/AlgorithmVisualizer";
import Slider from "./components/Slider";

function App() {
  const [arrLength, setArrLength] = useState(30);
  const [arr, setArr] = useState(generateRandomArray(arrLength));

  const resetArray = (newArrLength) => {
    setArrLength(newArrLength);
    const newArr = generateRandomArray(newArrLength);
    setArr(newArr);
  };

  return (
    <>
      <h1>Sorting Visualizer</h1>
      <AlgorithmVisualizer arr={arr} resetArray={resetArray} />
      <Slider resetArray={resetArray} />
    </>
  );
}

export default App;
