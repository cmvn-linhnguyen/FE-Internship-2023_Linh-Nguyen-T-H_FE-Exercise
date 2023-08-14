/* 4. Write a function to get a unique random array number in the specified range.
Input: (array length, min, max)
Output: new array
Ex: (4, 1, 10) => [3, 6, 1, 9] */

function randomArr(arrLength, min, max) {
  let output = [];

  let i = 0;
  while (i < arrLength) {
    let a = Math.floor(Math.random() * (max + 1 - min)) + min;
    if (!output.includes(a)) {
      output.push(a);
      i++;
    }
  }

  return output;
}
