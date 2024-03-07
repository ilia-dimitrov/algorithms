import React, { useState } from "react";
import Bar from "./Bar";
import bubbleSort from "../sortingAlgorithms/bubbleSort";
import insertionSort from "../sortingAlgorithms/insertionSort";

const AlgorithmVisualizer = ({ arr, resetArray }) => {
  const [sortedArray, setSortedArray] = useState([]);
  const [swappedIndices, setSwappedIndices] = useState([]);
  const [sortingInProgress, setSortingInProgress] = useState(false);

  const handleBubbleSort = () => {
    if (!sortingInProgress) {
      const { moves } = bubbleSort([...arr]);
      if (moves) {
        setSortingInProgress(true);
        animate({ arr, moves });
      } else {
        setSortedArray(arr.slice().sort((a, b) => a - b));
      }
    }
  };

  const handleInsertionSort = () => {
    if (!sortingInProgress) {
      const { arr: sortedArr, moves } = insertionSort([...arr]);
      if (moves) {
        setSortingInProgress(true);
        animate({ arr, moves });
      } else {
        setSortedArray(sortedArr);
      }
    }
  };

  function animate({ arr, moves }) {
    if (moves.length === 0) {
      setSortingInProgress(false);
      setSwappedIndices([]);
      return;
    }

    const move = moves.shift();
    const [i, j] = move.indices;
    const newArr = [...arr];

    if (move.type === "swap") {
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }

    setSwappedIndices(move);
    setSortedArray(newArr);

    setTimeout(function () {
      animate({ arr: newArr, moves });
    }, 70);
  }

  const handleReset = () => {
    if (sortingInProgress) {
      setSortingInProgress(false);
    } else {
      setSortedArray([]);
      resetArray(arr.length);
    }
  };

  const handleInputChange = (e) => {
    if (!sortingInProgress) {
      const newLength = parseInt(e.target.value);
      resetArray(newLength);
    }
  };

  const showBars = (array) => {
    return array.map((elem, index) => {
      let barClassName = "";
      if (
        swappedIndices.type === "comp" &&
        swappedIndices.indices &&
        (index === swappedIndices.indices[0] ||
          index === swappedIndices.indices[1])
      ) {
        barClassName = "blue";
      }
      if (
        swappedIndices.type === "swap" &&
        swappedIndices.indices &&
        (index === swappedIndices.indices[0] ||
          index === swappedIndices.indices[1])
      ) {
        barClassName = "red";
      }
      return <Bar key={index} num={elem} className={barClassName} />;
    });
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          {sortedArray.length === 0 ? showBars(arr) : showBars(sortedArray)}
          <hr />
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleReset} disabled={sortingInProgress}>
          New Arr
        </button>
        <button onClick={handleBubbleSort} disabled={sortingInProgress}>
          Bubble Sort
        </button>
        <button onClick={handleInsertionSort} disabled={sortingInProgress}>
          Insertion Sort
        </button>
      </div>
    </>
  );
};

export default AlgorithmVisualizer;
