// YOUR CODE BELOW
// oddCouple([1, 2, 3, 4, 5]); // => [1, 3]

function oddCouple(arr){
    let newArr = [];
    let count = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]%2!==0){
            newArr.push(arr[i]);
            count++;
        }
        if (count ===2){
            break;
        }
    }
    return newArr;
}
console.log(oddCouple([1,2,3,4,5]));