/* 6. Write a function that calculates the sum of the ordered elements that are divisible by a specified number in the array.
Input: (array, number)
Output: number
Ex: ([1, 2, 3, 4, 5, 6, 7], 2) => 12
Ex: ([1, 2, 3, 4, 5, 6, 7], 3) => 9 */

/**
 * Return sum of elements in an array that are divisible by a given number.
 *
 * @param {number[]} arr The array of numbers to sum up.
 * @param {number} n The divisor to check divisibility against.
 * @return {number} The sum of elements in the array that are divisible by n.
 */

function sumDivisible(arr, n) {
  const sum = arr.reduce((accumulator, i) => {
    if (i % n === 0) return accumulator + i;
    return accumulator;
  }, 0);

  return sum;
}
