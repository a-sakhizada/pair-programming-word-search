const transpose = function (matrix) {
  //total rows
  let totalRows = matrix.length;

  //total columns
  let totalColumns = matrix[totalRows - 1].length;

  //create an empty 2d array of fixed rows/columns
  let arr = new Array(totalColumns);
  for (let i = 0; i < totalColumns; i++) {
    arr[i] = new Array(totalRows);
  }

  //fill them ini
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      arr[column][row] = matrix[row][column];
    }
  }

  return arr;
};

const wordSearch = (letters, word) => {
  if (word.length > 0) {

    //check horizontally
    const horizontalJoin = letters.map((ls) => ls.join(""));
    console.log(horizontalJoin);
    for (l of horizontalJoin) {
      if (l.includes(word)) 
      {
        return true;
      }
      else
      {
        let reverseWord = l.split("").reverse().join("");
        if(reverseWord.includes(word))
        {
          console.log("checking backwards horizontally...");
          return true;
        }
      }
    }

    //check vertically
    const transposed = transpose(letters);
    const verticalJoin = transposed.map((ls) => ls.join(""));
    for (l of verticalJoin) {
      if (l.includes(word)) {
        return true;
      }
      else
      {
        let reverseWord = l.split("").reverse().join("");
        if(reverseWord.includes(word))
        {
          console.log("checking backwards vertically...");
          return true;
        }
      }
    }

    //check backwards horizontally/vertically


  }

  return false;
};

const result = wordSearch(
  [
    ["A", "W", "C", "K", "N", "A", "R", "P"],
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

console.log(result);
module.exports = wordSearch;
