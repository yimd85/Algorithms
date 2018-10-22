// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    if(A.length < 1 ) {
        return
    }

    // console.log(A); //[ 9, 3, 9, 3, 9, 7, 9 ]
    for(i=0; i< A.length; i++){

        // console.log('New array', A);
        for(j=1; j<A.length; j++){
            // console.log("This is the second", A[j]);
            if(A[0] == A[j]){
                break;
            } else if(j == A.length -1  ){
                return A[0];
            }
        }
        A.splice(0, 0, A.pop());
    }
}

//

for(var i = 0; i < a.length; i++){

    var first = a.indexOf(a[i]);
    var second =  a.lastIndexOf(a[i]);

    //console.log(first)
    //console.log(second)

    if( (first != -1)  && (first == second)){
        return a[i];
    }
    // console.log(a[i]);
}
