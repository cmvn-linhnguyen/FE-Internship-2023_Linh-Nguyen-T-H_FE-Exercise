/* 4. Write a function to get a unique random array number in the specified range.
Input: (array length, min, max)
Output: new array
Ex: (4, 1, 10) => [3, 6, 1, 9] */

/**
 * Returns an array of n unique random integers in the specified range.
 *
 * @param {number} n The length of the desired array.
 * @param {number} min The Minimum of the range.
 * @param {number} max The Maximum of the range.
 * @return {number[]} An array of n unique random integers in the specified range.
 */

function randomArr(n, min, max) {
  if (n > max - min + 1) {
    throw new Error(
      "The range is too small to generate the desired array length."
    );
  }

  let output = {};

  while (Object.keys(output).length < n) {
    let a = Math.floor(Math.random() * (max + 1 - min)) + min;
    if (!output[a]) {
      output[a] = true;
    }
  }

  return Object.keys(output).map(Number);
}
