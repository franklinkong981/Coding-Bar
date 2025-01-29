/* Unrolls a square array of arrays into a 1-D array that contains all the individual values in the inputArray in a clockwise spiral order. 
The function calls itself recursively by first unrolling the outer ring of the input array, then the next outermost ring, and so on,
until the center is reached, which is eiher just one value or an empty array.*/
function unroll(inputArray) {
  //Assuming there is no validation outside this file, make sure the input is valid.
  if (!isSquareArray(inputArray)) return "Invalid input. Your input array must be a square array.";

  //base cases: If inputArray has even length, innermost ring = no values. If inputArray has odd length, innermost ring = 1 value.
  if (inputArray.length === 0) return [];
  else if (inputArray.length === 1) return [inputArray[0][0]];

  const unrolledArray = [];
  /* recursive call: Get the unrolled spiral order of the outermost layer, then remove the outermost layer and append the unrolled spiral
  order of that, etc. all the way until one of the base cass is reached. */
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

/* Get the unrolled clockwise spiral order of the outermost layer of the input array. If you imagine the 2-D square inputArray as a grid of values,
the outermost layer is defined as the values that make up the perimeter of the grid. So, the outermost layer consists of the first inner array,
the last inner array, as well as the first and last values of the other inner arrays.*/
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

/* Calculates the total number of values that make up the outermost layer of the 2-D square array of length arr_length.
For instance, if the arr_length is 4, that means there are 4 * 4 = 16 total values, and the number of values that make up the 
outermost layer would be 4 + 3 + 3 + 2 = 12. */
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

/* Removes the outermost layer of the inputArray by modifying the inputArray in place. This consists of deleting the first and last
inner arrays, followed by deleting the first and last values of all remaining inner arrays. */
function removeOuterLayer(inputArray) {
  //delete first and last inner arrays.
  inputArray.shift();
  inputArray.pop();

  //delete first and last values of all remaining inner arrays.
  for (let innerArray of inputArray) {
    innerArray.shift();
    innerArray.pop();
  }

  return inputArray;
}

module.exports = {unroll, isSquareArray, unrollOuterLayer, getOuterLayerLength, getNextRowAndColumn, removeOuterLayer};
