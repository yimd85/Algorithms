function solution(A) {
// write your code in JavaScript (Node.js 8.9.4)
//initial check to make sure we can get out
if (A[0] == 0 ){
  return -1;
 }


 //if we go iterate the # of jumps are needed > array length, we can assume that we cannot get out.

 var x = 0;

   for (i = 0; i <= A.length + 1 ; i++){
     x = i+A[x];

     if( x > A.length ) {
       return i + 1;
     } else if (i == A.length + 1 || i < A.length){
     return -1;
     }
   }

 }

//
// When looping over the array, keep in mind that you can jump out of the array
// in two directions – at the beginning and the end. Thus, your loop condition
// must check for both of these cases.

//To prevent an infinite loop, track the
// array indexes you’ve already visited by updating the value of array[index] to
//  something identifiable like null.





if(A[0] == 0)
    return -1;

if(A[0] < 0)
    return 1;

var x = 0;

for (i=0; i <= A.length; i++){
    x = A[x] + x;
    // console.log(x);
    if (A[x] === undefined)
        return i + 1;

    if (i >= A.length)
        return -1;
}

}



B = [3, 3, -1, -2, 1];
C = [-3, 3, -1, -2, 5];
D = [0, 3, -1, -2, 5];
E = [3, 3, -101, -2, -2];
F = [1, -1];
G = [9, 7, 5, 3, 1, 3, -2, -4, -6, -8];
H = [9, -1, 5, 3, 1, 3, -2, -4, -6, -8];

solution(G);
