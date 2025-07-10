// YOUR CODE BELOW
// myIncludes([10, 20, 30], 20); // => true
// myIncludes(['apples', 'bananas', 'citrus'], 'pears'); // => false
function myIncludes(arr, searchValue){
    for(let i = 0; i<arr.length; i++){
        if(arr[i]===searchValue){
            return true;
        }
    }
    return false;
}
myIncludes([10, 20, 30], 20); // => true
myIncludes(['apples', 'bananas', 'citrus'], 'pears'); // => false