// YOUR CODE BELOW
// let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
// let oddNums = veryOdd(allTheNums);

function veryOdd(arr){
    let newArr = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]%2!==0){
            newArr.push(arr[i]);
        }
        
    }
    return newArr;
}