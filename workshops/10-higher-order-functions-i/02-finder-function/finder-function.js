// YOUR CODE BELOW
let arr = [1,2,3,4]
function finderFunction(arr, func){
    for(let i = 0; i< arr.length; i++){
            if(func(arr[i])){
            // console.log("Hi ", arr[i]);
            return i;  
            // break
        }
    }
    return -1;
}
function check(arr){
    return "check";
}
finderFunction(arr, func);
