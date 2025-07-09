// YOUR CODE BELOW
// Write a function `exponentiate` that accepts two arguments:
// 1. base (number)
// 2. power (number)
function exponentiate(base, power){
    debugger;
    let result = 1;
    if(power===0){
        result = 1;
    }

    while(power>0){
        result *= base;
        power--;
    }

    return result;
}


console.log(exponentiate(4, 4));    // => 4
// exponentiate(3, 4)    // => 81