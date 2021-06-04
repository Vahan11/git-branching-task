# Advanced GIT

> Here are the tasks about Advanced GIT and team working.

## Task 01

_description_
```Javascript
Write a function that makes the first number as large as possible by
swapping out its digits for digits in the second number.
maxPossible(9328, 456) ➞ 9658
9658 is the largest possible number built from swaps from 456.
3 replaced with 6 and 2 replaced with 5.
```
_solution_

```Javascript
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
```
toFile