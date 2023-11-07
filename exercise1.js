const convertColumnToNumber = (column) => {
  let result = 0;
  function getNumericValue(letter) {
    const uppercaseLetter = letter.toUpperCase();
    const charCodeA = "A".charCodeAt(0);
    const numericValue = uppercaseLetter.charCodeAt(0) - charCodeA + 1;
    return numericValue;
  }
  for (let i = column.length - 1; i >= 0; i--) {
    const letter = column[i];
    const numericValue = getNumericValue(letter);
    result = result * 26 + numericValue;
  }
  return result;
};

console.log(convertColumnToNumber("J"));
