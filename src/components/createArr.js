export const generateRandomArray = (numElements) => {
  const arr = [];
  for (let i = 0; i < numElements; i++) {
    arr.push(Math.random());
  }
  return arr;
};
