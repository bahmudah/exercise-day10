function waysOfSum(num) {
  if (num == 0) return 1;
  if (num < 0) return 0;

  return waysOfSum(num - 2) + waysOfSum(num - 1);
}

let num = 3;

console.log(waysOfSum(num));
