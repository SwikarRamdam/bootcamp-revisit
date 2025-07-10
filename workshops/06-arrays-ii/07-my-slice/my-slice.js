// YOUR CODE BELOW
// Define a function, `mySlice`, that accepts up to three arguments:
//   1. originalArray
//   2. startIdx (number, optional)
//   3. endIdx (number, optional)

function mySlice(originalArray, startIdx=0, endIdx=originalArray.length){
    let result = [];
    if(startIdx<0){
        startIdx=originalArray.length + startIdx;
    }
    if(endIdx<0){
        endIdx=originalArray.length + endIdx;
    }
    for(let i = startIdx; i<endIdx;i++){
        result.push(originalArray[i]);
    }
    return result;

}

console.log(mySlice([1, 2, 3], 1, 2)) // => [2]
console.log(mySlice([1, 2, 3], -1)) // => [3]
console.log(mySlice(['bagel', 'baguette', 'bialy', 'brioche'], -2)); // => [3]

