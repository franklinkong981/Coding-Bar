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


