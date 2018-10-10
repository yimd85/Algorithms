// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A === undefined || A.length < 1 || K < 0 ) {
        return undefined
    }

    for(i=1; i<=K; i++){
            A.splice(0, 0, A.pop());
    }

    return A;
}
