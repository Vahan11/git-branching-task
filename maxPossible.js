function maxPossible(num1, num2) {
  let arr1 = String(num1).split("");
  let arr2 = String(num2)
    .split("")
    .sort((a, b) => b - a);
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < arr2[0]) {
      arr1[i] = arr2.shift();
    }
  }
  return arr1.join("");
}
