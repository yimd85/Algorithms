const arr = [7, 0, -4, 5, 2, 3, 1, 8, 4, 32, 1, 1, 3, 2, -4, -1, 0, 0, 0, 7, 0, -4, 5, 2, 3, 1, 8, 4, 32, 1, 1, 3, 2, -4, -1, 0, 7, 0, -4, 5, 2, 3, 1, 8, 4, 32, 1, 1, 3, 2, -4, -1, 0, 7, 0, -4, 5, 2, 3, 1, 8, 4, 32, 1, 1, 3, 2, -4, -1, 0, 7, 0, -4, 5, 2, 3, 1, 8, 4, 32, 1, 1, 3, 2, -4, -1, 0, 7, 0, -4, 5, 2, 3, 1, 8, 4, 32, 1, 1, 3, 2, -4, -1, 0, 7, 0, -4, 5, 2, 3, 1, 8, 4, 32, 1, 1, 3, 2, -4, -1, 0, 7, 0, -4, 5, 2, 3, 1, 8, 4, 32, 1, 1, 3, 2, -4, -1, 0, 7, 0, -4, 5, 2, 3, 1, 8, 4, 32, 1, 1, 3, 2, -4, -1, 0, 7, 0, -4, 5, 2, 3, 1, 8, 4, 32, 1, 1, 3, 2, -4, -1, 0, 7, 0, -4, 5, 2, 3, 1, 8, 4, 32, 1, 1, 3, 2, -4, -1, 0, 1 ];


function solution(arr, target){

// Stay away from nested loops on this problem.
// First, use a first loop that counts the occurrences of each value in
// the array and store that count in a dictionary or hash, i.e. {value: count}.
// This lets us combine duplicates.
  var x = {}, results = [];;
  arr.forEach(function(value, index){
    x[value] = index;
  });

  // console.log(hashTable);


  // Now loop over the new dictionary and look for the complement of the
  // current item in the loop. Use the count values from the dictionary to
  // get the total number of complements.

  for (var i = 0; i < arr.length; i++) {
    if (x[target - arr[i]]) {
        console.log([arr[x[target - arr[i]]], arr[i]])
        results.push([arr[x[target - arr[i]]], arr[i]]);
    }
  }
  console.log(results);
  return results.length;
}

solution(arr, 4);



function solution(arr, A) {
// write your code in JavaScript (Node.js 8.9.4)
// need to go through itererate through the array for every element on the array
  var counter = 0; //this is the counter
  for(i = 0; i < A.length; i++){
    for(j =0; j < A.length; j++){
      if(A[0] + A[j] == K){
        counter ++;
      }
    }
    A.splice(0, 0, A.pop());
  }
  return counter;
}

solution(arr, 4);
