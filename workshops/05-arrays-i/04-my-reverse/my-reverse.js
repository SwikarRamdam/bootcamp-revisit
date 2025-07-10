// YOUR CODE BELOW
// myReverse([1, 2, 3]);    // => [3, 2, 1]

function myReverse(arr){
    let newArr = []; 
    for(let i = arr.length-1; i>=0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}

