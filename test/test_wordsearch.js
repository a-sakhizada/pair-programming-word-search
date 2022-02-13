const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is horizonatally present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });



  it("should return true if the word is vertically present", function() {

    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["F", "E", "I", "N", "F", "E", "L", "D"],
        ["R", "F", "C", "F", "Q", "U", "A", "L"],
        ["A", "M", "J", "T", "E", "V", "R", "G"],
        ["N", "H", "C", "S", "Y", "E", "R", "L"],
        ["K", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "FRANK"
    );

    assert.isTrue(result);

  });

  it("should return false if the word is an empty string", function() {

    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["F", "E", "I", "N", "F", "E", "L", "D"],
        ["R", "F", "C", "F", "Q", "U", "A", "L"],
        ["A", "M", "J", "T", "E", "V", "R", "G"],
        ["N", "H", "C", "S", "Y", "E", "R", "L"],
        ["K", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      ""
    );
    assert.isFalse(result);
  });

  it("should return true if the word is found backwards vertically", function() {

    const result = wordSearch(
      [
        ["A", "W", "C", "K", "N", "A", "R", "O"],
        ["O", "E", "I", "N", "F", "E", "L", "D"],
        ["K", "F", "C", "F", "Q", "U", "A", "L"],
        ["N", "M", "J", "T", "E", "V", "R", "G"],
        ["A", "H", "C", "S", "Y", "E", "R", "L"],
        ["R", "F", "R", "E", "N", "E", "Y", "B"],
        ["F", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "FRANK"
    );
    assert.isTrue(result);
  });

  it("should return true if the word is found backwards horizontally", function() {

    const result = wordSearch(
      [
        ["A", "W", "C", "K", "N", "A", "R", "F"],
        ["O", "E", "I", "N", "F", "E", "L", "D"],
        ["K", "F", "C", "F", "Q", "U", "A", "L"],
        ["N", "M", "J", "T", "E", "V", "R", "G"],
        ["A", "H", "C", "S", "Y", "E", "R", "L"],
        ["R", "F", "R", "E", "N", "E", "Y", "B"],
        ["P", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "FRANK"
    );
    assert.isTrue(result);
  });

});
