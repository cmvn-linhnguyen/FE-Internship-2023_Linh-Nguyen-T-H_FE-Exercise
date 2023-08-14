/* 5. Write a function to generate a random hex color code.
Input: ()
Output: string
Ex: () => #1A7B9D */

function randomHexColor() {
  let output = "#";
  let chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  for (let i = 0; i < 6; i++) {
    output += chars[Math.floor(Math.random() * 16)];
  }

  return output;
}
