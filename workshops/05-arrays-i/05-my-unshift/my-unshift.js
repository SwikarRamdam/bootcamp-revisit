// YOUR CODE BELOW
// unShift([1, 2, 3], 0); / => [0, 1, 2, 3];
function myUnshift(arr,val){
    let newArr = [];
    newArr.push(val);
    for(let i = 0; i<arr.length;i++){
        newArr.push(arr[i]);
    }
    return newArr;
}