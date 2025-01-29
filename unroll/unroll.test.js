const {unroll, isSquareArray, unrollOuterLayer, getOuterLayerLength, getNextRowAndColumn, removeOuterLayer} = require("./unroll");

describe("Tests the function isSquareArray", function() {
  it("isSquareArray is a function", function() {
    expect(typeof isSquareArray).toEqual("function");
  });

  it("Returns false for inputs that aren't arrays", function() {
    expect(isSquareArray("This should return false")).toEqual(false);
    expect(isSquareArray(true)).toEqual(false);
    expect(isSquareArray(306)).toEqual(false);
  });

  it("Returns false for input arrays where not every element is an array", function() {
    const lastElementNotArray = [
      [1,2,3,4],
      [5,6,7,8],
      [9,10,11,12],
      "I'm not an array!"
    ]
    expect(isSquareArray([1,2,3,4])).toEqual(false);
    expect(isSquareArray(lastElementNotArray)).toEqual(false);
  });

  it("Returns true for inputs that are square arrays", function() {
    const smallSquareArray = [
      ["a", "b"],
      ["c", "d"]
    ];
    const largeSquareArray = [
      [1,2,3,4],
      [5,6,7,8],
      [9,10,11,12],
      [13,14,15,16]
    ];
    expect(isSquareArray([])).toEqual(true);
    expect(isSquareArray(smallSquareArray)).toEqual(true);
    expect(isSquareArray(largeSquareArray)).toEqual(true);
  });
});

describe("Tests the getOuterLayerLength function", function() {
  it("getOuterLayerLength is a function", function() {
    expect(typeof getOuterLayerLength).toEqual("function");
  });

  it("Returns the correct length of the outermost layer of a 2-D square array given the array length", function() {
    expect(getOuterLayerLength(0)).toEqual(0);
    expect(getOuterLayerLength(1)).toEqual(1);
    expect(getOuterLayerLength(2)).toEqual(4);
    expect(getOuterLayerLength(3)).toEqual(8);
    expect(getOuterLayerLength(4)).toEqual(12);
  });
});

describe("Tests the getNextRowAndColumn function", function() {
  it("getNextRowAndColumn is a function", function() {
    expect(typeof getNextRowAndColumn).toEqual("function");
  });

  it("Returns the correct next row and column", function() {
    expect(getNextRowAndColumn(0,0,3)).toEqual([0,1]);
    expect(getNextRowAndColumn(0,1,3)).toEqual([0,2]);
    expect(getNextRowAndColumn(0,3,3)).toEqual([1,3]);
    expect(getNextRowAndColumn(3,3,3)).toEqual([3,2]);
    expect(getNextRowAndColumn(3,0,3)).toEqual([2,0]);
    //test edge case
    expect(getNextRowAndColumn([0,0,0])).toEqual([0,0]);
  });
});

describe("Tests the unrollOuterLayer function", function() {
  it("unrollOuterLayer is a function", function() {
    expect(typeof unrollOuterLayer).toEqual("function");
  });

  it("Returns an array with the correct clockwise spiral order of the input array's outermost layer", function() {
    expect(unrollOuterLayer([])).toEqual([]);
    expect(unrollOuterLayer([[1]])).toEqual([1]);
    const smallSquareArray = [
      [1,2],
      [3,4]
    ];
    expect(unrollOuterLayer(smallSquareArray)).toEqual([1,2,4,3]);
    const largeSquareArray = [
      [1,2,3,4],
      [5,6,7,8],
      [9,10,11,12],
      [13,14,15,16]
    ];
    expect(unrollOuterLayer(largeSquareArray)).toEqual([1,2,3,4,8,12,16,15,14,13,9,5]);
  });
});

describe("Tests the removeOuterLayer function", function() {
  it("removeOuterLayeris a function", function() {
    expect(typeof removeOuterLayer).toEqual("function");
  });

  it("Returns the correct array with the outer layer removed", function() {
    expect(removeOuterLayer([])).toEqual([]);
    expect(removeOuterLayer([[1]])).toEqual([]);
    const two_by_two = [
      [1,2],
      [3,4]
    ];
    expect(removeOuterLayer(two_by_two)).toEqual([]);
    const three_by_three = [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ];
    expect(removeOuterLayer(three_by_three)).toEqual([[5]]);
    const four_by_four = [
      [1,2,3,4],
      [5,6,7,8],
      [9,10,11,12],
      [13,14,15,16]
    ];
    expect(removeOuterLayer(four_by_four)).toEqual([[6,7], [10,11]]);
  });
});

describe("Tests the top-level unroll function", function() {
  it("unrollis a function", function() {
    expect(typeof unroll).toEqual("function");
  });

  it("unroll returns error message for invalid input", function() {
    expect(unroll(306)).toEqual("Invalid input. Your input array must be a square array.");
    const lastElementNotArray = [
      [1,2,3,4],
      [5,6,7,8],
      [9,10,11,12],
      "I'm not an array!"
    ]
    expect(unroll(lastElementNotArray)).toEqual("Invalid input. Your input array must be a square array.");
  });

  it("unroll returns the correct unrolled array for base case inputs", function() {
    expect(unroll([])).toEqual([]);
    expect(unroll([[1]])).toEqual([1]);
  });

  it("unroll returns the correct unrolled array for bigger square array inputs", function() {
    const smallSquareArray = [
      [1,2],
      [3,4]
    ];
    expect(unroll(smallSquareArray)).toEqual([1,2,4,3]);
    const lettersArray = [
      ["a","b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ];
    expect(unroll(lettersArray)).toEqual(["a", "b", "c", "f", "i", "h", "g", "d", "e"]);
    const largeSquareArray = [
      [1,2,3,4],
      [5,6,7,8],
      [9,10,11,12],
      [13,14,15,16]
    ];
    expect(unroll(largeSquareArray)).toEqual([1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]);
  });
});