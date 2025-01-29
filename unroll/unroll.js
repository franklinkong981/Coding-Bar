/* Unrolls a square array of arrays into a 1-D array that contains all the individual values in the inputArray in a spiral order. */
function unroll(inputArray) {
  if (!isSquareArray(squareArray)) return "Invalid input. Your input array must be a square array.";

  if (inputArray.length === 0) return [];

  //we know the first value in the unrolledArray will be the first element in the first inner array in inputArray.
  const unrolledArray = [inputArray[0][0]];
  const dim = inputArray.length;
  let currentRow = 0;
  let currentColumn = 0;
  while (unrolledArray.length < Math.pow(dim, 2)) {
    const [nextRow, nextColumn] = getNextRowAndColumn(currentRow, currentColumn, dim);
    currentRow = nextRow;
    currentColumn = nextColumn;

    unrolledArray.push(inputArray[currentRow][currentColumn]);
  }

  return unrolledArray;
}

/* Checks to make sure if input is a square array of arrays, where the input is an array, all its elements are arrays, and every array
it contains has a length equal to inputArray. */
function isSquareArray(inputArray) {
  if (!(Array.isArray(inputArray))) return false;

  for (let innerArray of inputArray) {
    if (!(Array.isArray(innerArray))) return false;
    if (innerArray.length !== inputArray.length) return false;
  }

  return true;
}

module.exports = {unroll, isSquareArray, getNextRowAndColumn};
