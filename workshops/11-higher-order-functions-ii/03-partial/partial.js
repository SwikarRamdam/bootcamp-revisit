// YOUR CODE BELOW
function partial(callFunc, argA){
    return function newFun(argB){
        // callFunc(argA, argB);
        return callFunc(argA, argB);
    };
}
