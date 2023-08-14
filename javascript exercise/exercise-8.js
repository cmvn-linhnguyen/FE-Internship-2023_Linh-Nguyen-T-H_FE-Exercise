/* 8. Write a function to find the new time after a specified time from the given time.
Input: (givenTime string, period number(s))
Output: newTime string
Ex: ('12:30:29', 600) => '12:40:29'
Ex: ('23:30:29', 6000) => '01:10:29' */

function findTime(str, n) {
  const [h, m, s] = str.split(":").map(Number);
  const totalSeconds = h * 3600 + m * 60 + s + n;

  const h1 = (totalSeconds / 3600) % 24;
  const m1 = Math.floor((totalSeconds % 3600) / 60);
  const s1 = totalSeconds % 60;

  const formattedTime = `${String(Math.floor(h1)).padStart("0")}:${String(
    m1
  ).padStart(2, "0")}:${String(s1).padStart(2, "0")}`;

  return formattedTime;
}
