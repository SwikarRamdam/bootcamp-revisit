// YOUR CODE BELOW
// Write a function `everyWhichWay` that accepts three number arguments. `everyWhichWay`
// should:

//   - return 'sum' if the sum of the first two numbers equals the third
//   - return 'difference' if the first number minus the second equals the third
//   - return 'product' if the product of the first two numbers equals the third
//   - return 'fraction' if the first number divided by the second equals the third
//   - return null if none of the above are true

// ```javascript
function everyWhichWay(a,b,c){
    if(a+b===c){
        return "sum";
    }
    else if(a-b===c){
        return "difference";
    }
    else if(a*b===c){
        return "product"
    }
    else if(a/b===c){
        return "fraction"
    }
    else return null
}

everyWhichWay(10, 20, 30);