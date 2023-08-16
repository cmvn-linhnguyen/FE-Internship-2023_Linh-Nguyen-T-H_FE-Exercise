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
Output: 1 -> 8 -> 7 -> 2 -> 3 -> 4 -> 6 -> 5

Không có Asynchronous thực thi trước.
Có Asynchronous, trong cùng một phạm vi thì micro (Promise) thực thi trước.

Dòng lệnh console.log("stack [1]"); được thực thi trước => Output: 1
function A, B, C có Asynchronous đi vào WebAPIs

Tới thực thi console.log("stack [8]"); => Output: 1 -> 8

WebAPIs đang chứa func A, B, C. 
func C được chuyển sang Queue ưu tiên, 
func A, B được chuyển sang Queue không ưu tiên

Xử lý func C trước: func D Asynchronous => chuyển qua WebAPIs
                    thực thi console.log("micro [7]"); => output: 1 -> 8 -> 7

thực thi func A; => output: 1 -> 8 -> 7 -> 2
thực thi func B: => output: 1 -> 8 -> 7 -> 2 -> 3
thực thi func D: thực thi console.log("macro [4]"); => output: 1 -> 8 -> 7 -> 2 -> 3 -> 4
                 func E, func F: F được thực thi trước; => 1 -> 8 -> 7 -> 2 -> 3 -> 4 -> 6
                                 E thực thi sau;=> 1 -> 8 -> 7 -> 2 -> 3 -> 4 -> 6 -> 5
*/
