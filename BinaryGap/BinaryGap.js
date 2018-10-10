// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)

    //convert to binary, then converts that binary to an array of numbers.
    var array = (N).toString(2).split("").map(Number);
    var firstOne = 0, secondOne = 0, gap = 0;

    for(i=0; i<array.length; i++){
        firstOne = secondOne;
        // console.log(array[i]);
        if(array[i] === 1 ) {
            secondOne = i;
            if(gap < secondOne - firstOne -1) {
                gap = secondOne - firstOne - 1;
            }
        }
    }

    return (gap);
}
