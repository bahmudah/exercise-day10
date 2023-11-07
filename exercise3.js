let anagramCheck = (String1 = "", String2 = "") => {
  let word1 = String1.split("").sort().join("");
  let word2 = String2.split("").sort().join("");
  if (word1 == word2) {
    return true;
  }
  return false;
};

console.log(anagramCheck("rat", "tar"));
