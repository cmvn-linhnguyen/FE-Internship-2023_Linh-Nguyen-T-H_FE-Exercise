/* 3. Write a JavaScript function to truncate a string to a certain number of words.
Input: (string, number)
Output: new string
Ex: ('The quick brown fox jumps over the lazy dog', 4) => "The quick brown fox" */

function truncateStr(str, number) {
  let output = "";
  for (let i = 0; i < number; i++) {
    output += str.split(" ")[i] + " ";
  }

  return output.trim();
}
