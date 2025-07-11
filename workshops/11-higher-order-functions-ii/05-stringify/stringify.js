// YOUR CODE BELOW
function stringify(callFun){
    return function newFun(){
        callFun();
        return String(callFun());
    }
}