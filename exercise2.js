const showNonDuplicateNumber = (arr = []) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result ^= arr[i];
  }
  return result;
};
const nums = [4, 1, 2, 1, 2];
console.log(showNonDuplicateNumber(nums));
