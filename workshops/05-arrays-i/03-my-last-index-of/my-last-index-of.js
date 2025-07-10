// YOUR CODE BELOW
// myLastIndexOf(['the', 'girls', 'bring', 'the', 'boys', 'out'], 'the', 2); // => 0
function myLastIndexOf(arr, searchValue, startIdx ){
    if(!startIdx){
        startIdx = arr.length-1;
    }   
    for(let i = startIdx; i>=0; i--){
        if(arr[i]===searchValue){
            return i;
        }
    }
    return -1;
}