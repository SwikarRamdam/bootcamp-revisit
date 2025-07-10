// YOUR CODE BELOW
// myLastIndexOf(['the', 'girls', 'bring', 'the', 'boys', 'out'], 'the', 2); // => 0
function myLastIndexOf(arr, searchValue, startIdx ){
    if(!startIdx){
        startIdx = arr.length-1;
    }
    // let ourIdx = -1;
    
    for(let i = startIdx; i>=0; i--){
        let foundAt = 0;
        if(arr[i]===searchValue){
            return i;
        }
    
        

    }
    return -1;
}