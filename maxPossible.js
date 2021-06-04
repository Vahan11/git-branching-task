function maxPossible(num1, num2) {
  let num1Len = `${num1}`.length;
  let str = `${num1}${num2}`;
  let result = str
    .split("")
    .sort((a, b) => b - a)
    .slice(0, num1Len)
    .join("");
  return Number(result);
}

console.log(maxPossible(9132, 5564)); // 9655
