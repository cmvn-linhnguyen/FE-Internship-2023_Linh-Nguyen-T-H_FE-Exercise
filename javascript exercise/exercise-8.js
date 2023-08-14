/* 8. Write a function to find the new time after a specified time from the given time.
Input: (givenTime string, period number(s))
Output: newTime string
Ex: ('12:30:29', 600) => '12:40:29'
Ex: ('23:30:29', 6000) => '01:10:29' */

function findTime(str, number) {
  let totalSecond =
    parseInt(str.split(":")[0]) * 3600 +
    parseInt(str.split(":")[1]) * 60 +
    parseInt(str.split(":")[2]) +
    number;

  let h = Math.floor(totalSecond / 3600);
  let m = Math.floor((totalSecond - 3600 * h) / 60);
  let s = totalSecond - h * 3600 - m * 60;

  return (h % 24) + ":" + m + ":" + s;
}
