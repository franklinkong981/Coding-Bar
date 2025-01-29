/* Unrolls a square array of arrays into a 1-D array that contains all the individual values in the inputArray in a spiral order. */
function unroll(inputArray) {
  if (!isSquareArray(inputArray)) return "Invalid input. Your input array must be a square array.";

  if (inputArray.length === 0) return [];
  else if (inputArray.length === 1) return [inputArray[0][0]];

  //we know the first value in the unrolledArray will be the first element in the first inner array in inputArray.
  const unrolledArray = [];
  unrolledArray.push(...unrollOuterLayer(inputArray), ...unroll(removeOuterLayer(inputArray)));
  
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

function unrollOuterLayer(inputArray) {
  const unrolledOuterLayer = [];
  let currentRowIndex = 0;
  let currentColumnIndex = 0;

  while (unrolledOuterLayer.length < getOuterLayerLength(inputArray.length)) {
    unrolledOuterLayer.push(inputArray[currentRowIndex][currentColumnIndex]);

    const [nextRowIndex, nextColumnIndex] = getNextRowAndColumn(currentRowIndex, currentColumnIndex, inputArray.length - 1);
    currentRowIndex = nextRowIndex;
    currentColumnIndex = nextColumnIndex;
  }

  return unrolledOuterLayer;
}

function getOuterLayerLength(arr_length) {
  return arr_length + (arr_length - 1) + (arr_length - 1) + (arr_length - 2);
}

/* Given the current row index, column index, and length of the 2-D input array, determine the next row index and column index 
given that we are going in a clockwise spiral order. */
function getNextRowAndColumn(rowIndex, columnIndex, last_index) {
  if (rowIndex <= columnIndex && rowIndex + columnIndex < last_index) return [rowIndex, columnIndex + 1];
  else if (rowIndex < columnIndex && rowIndex + columnIndex >= last_index) return [rowIndex + 1, columnIndex];
  else if (rowIndex >= columnIndex && rowIndex + columnIndex > last_index) return [rowIndex, columnIndex - 1];
  else if (rowIndex > columnIndex && rowIndex + columnIndex <= last_index) return [rowIndex - 1, columnIndex];
}

function removeOuterLayer(inputArray) {
  inputArray.shift();
  inputArray.pop();

  for (let innerArray of inputArray) {
    innerArray.shift();
    innerArray.pop();
  }

  return inputArray;
}

const square = [
	[1,2,3,4],
	[5,6,7,8],
	[9,10,11,12],
	[13,14,15,16]
];

const smallerSquare = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"]
];

console.log(unroll(square));
console.log(unroll(smallerSquare));

module.exports = {unroll, isSquareArray, unrollOuterLayer, getOuterLayerLength, getNextRowAndColumn, removeOuterLayer};
