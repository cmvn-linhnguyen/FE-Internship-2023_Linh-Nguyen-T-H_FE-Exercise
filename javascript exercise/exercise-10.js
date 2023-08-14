console.log("stack [1]");
setTimeout(function A() {
  console.log("macro [2]");
}, 0);
setTimeout(function B() {
  console.log("macro [3]");
}, 0);
const p = Promise.resolve();
p.then(function C() {
  setTimeout(function D() {
    console.log("macro [4]");
    setTimeout(function E() {
      console.log("macro [5]");
    });
    p.then(function F() {
      console.log("micro [6]");
    });
  }, 0);
  console.log("micro [7]");
});
console.log("stack [8]");

/*
Kết quả: 1 -> 8 -> 7 -> 2 -> 3 -> 4 -> 6 -> 5
*/
