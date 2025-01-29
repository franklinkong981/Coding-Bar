function unroll(inputArray) {
  if (!isSquareArray(squareArray)) return "Invalid input. Your input array must be a square array.";

  let unrolledArray = [];

  return unrolledArray;
}

//Checks to make sure if input is a square array of arrays, where the input is an array, all its elements are arrays, and every array
// it contains has a length equal to inputArray.
function isSquareArray(inputArray) {
  if (!(Array.isArray(inputArray))) return false;

  //make sure every array in inputArray is an array and the length of each inner array = the length of the outer array.
  for (let innerArray of inputArray) {
    if (!(Array.isArray(innerArray))) return false;
    if (innerArray.length !== inputArray.length) return false;
  }

  return true;
}

module.exports = unroll;
