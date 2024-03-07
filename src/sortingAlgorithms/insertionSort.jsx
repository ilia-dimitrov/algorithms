const insertionSort = (arr) => {
  const len = arr.length;
  const moves = [];

  for (let i = 1; i < len; i++) {
    let current = arr[i];
    let j = i - 1;

    moves.push({ indices: [i, j], type: "comp" });

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      moves.push({ indices: [j + 1, j], type: "swap" });
      j--;
    }

    arr[j + 1] = current;
  }

  return { arr, moves };
};

export default insertionSort;
