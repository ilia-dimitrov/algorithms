const bubbleSort = (arr) => {
  const len = arr.length;
  const moves = [];

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      moves.push({ indices: [j, j + 1], type: "comp" });

      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        moves.push({ indices: [j, j + 1], type: "swap" });
      }
    }
  }

  return { moves };
};

export default bubbleSort;
