/* 1. Write a JavaScript function to repeat a string a specified times.
Input: (string, repeat times)
Output: the new string
Ex: ("FE", 4) => 'FEFEFEFE' */

function repeatStr(str, times) {
  let output = "";
  for (let i = 0; i < times; i++) {
    output += str;
  }

  return output;
}
