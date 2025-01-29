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
  });
});
