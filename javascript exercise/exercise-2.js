/* 2. Write a JavaScript function to count the occurrence of a substring in a string.
Input: (string, substring)
Output: the occurrence of a substring in a string
Ex: ("The quick brown fox jumps over the lazy dog", 'the') => 2
Ex: ("The quick brown fox jumps over the lazy dog", 'fox') => 1 */

function countOccurrence(str, subStr) {
  const regex = new RegExp(subStr, "gi");
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}
