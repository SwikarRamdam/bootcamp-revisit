// YOUR CODE BELOW
function callCount(){
    let count = 0;
    return function newFun(){
        count++
        return count;
    }
}