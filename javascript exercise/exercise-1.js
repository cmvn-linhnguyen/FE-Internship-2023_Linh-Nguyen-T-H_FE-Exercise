/* 1. Write a JavaScript function to repeat a string a specified times.
Input: (string, repeat times)
Output: the new string
Ex: ("FE", 4) => 'FEFEFEFE' */

/**
 * Returns str repeated n times.
 *
 * @param {string} str The string to repeat.
 * @param {number} times The times of repetitions.
 * @return {string} str repeated n times.
 */

function repeatStr(str, times) {
  return str.repeat(times);
}
