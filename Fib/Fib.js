// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function solution(N) {
// write your code in JavaScript (Node.js 8.9.4)
// Fibonacci sequence starts at 1
// 1, 1, 2, 3, 5, 8, 13, 21 ...
// N = 8 would mean that its 21

var a = 1;
var b = 0 ;
var temp = 0;

for( i = 0; i < N; i++){
  temp = a;
  a = a + b;
  b = temp;
  temp = Number(temp.toString().substr(-6));
}

  return temp;
}
