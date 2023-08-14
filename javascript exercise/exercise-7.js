/* 7. Write a function to find the maximum sum of 2 consecutive elements in the array.
Input: (array)
Output: number
Ex: ([1, 2, 3, 4, 5, 6, 7]) => 13
Ex: ([1, 2, 3, 7, 5, 6, 4]) => 12 */

/**
 * Returns the maximum sum of 2 consecutive elements in the array.
 *
 * @param {number[]} arr The array of numbers to find the maximum sum in.
 * @return {number} The maximum sum of 2 consecutive elements in the array.
 */

function sumMaximum(arr) {
  let sumMax = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    sumMax = Math.max(arr[i] + arr[i + 1], sumMax);
  }

  return sumMax;
}
