// YOUR CODE BELOW
// arrayFlattener([1,[2, 3], 4]); // => [1, 2, 3, 4]
function arrayFlattener(arr){
    debugger;
    let newArr = [];
    for(let i =0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            for(let j = 0; j<arr[i].length; j++){
                newArr.push(arr[i][j]);
            }
        }
        else newArr.push(arr[i]);
    }
    return newArr;
}
console.log(arrayFlattener([1,[2,3],4]));