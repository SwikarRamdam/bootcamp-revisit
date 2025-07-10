// YOUR CODE BELOW
// evenAndOdd([1, 2, 3, 4, 5, 6]); // => [[ 2 ,4, 6 ], [ 1, 3, 5 ]]
function evenAndOdd(arr){
    let newArr = [[],[]];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]%2==0){
            newArr[0].push(arr[i]);
        }
        else newArr[1].push(arr[i]);
    }
    return newArr;
}
console.log(evenAndOdd([1, 2, 3, 4, 5, 6]));