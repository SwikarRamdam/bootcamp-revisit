// YOUR CODE BELOW


let sum = 0;

let nums = [1, 2, 3];
console.log(sum);
function myForEach(arr, func){
    for(let i = 0; i<arr.length;i++){
        func(arr[i],i);//because call back function accepts value, index, array also
    }
}

function addToSum(num) {
    sum += num;
}

console.log(myForEach(nums, addToSum));