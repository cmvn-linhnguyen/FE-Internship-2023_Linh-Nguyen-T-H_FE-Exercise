/* 7. Write a function to find the maximum sum of 2 consecutive elements in the array.
Input: (array)
Output: number
Ex: ([1, 2, 3, 4, 5, 6, 7]) => 13
Ex: ([1, 2, 3, 7, 5, 6, 4]) => 12 */

function sumMaximum(arr) {
  let sumArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    sumArr.push(arr[i] + arr[i + 1]);
  }

  return Math.max(...sumArr);
}
