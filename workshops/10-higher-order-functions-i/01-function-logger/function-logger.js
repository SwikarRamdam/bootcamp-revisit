// YOUR CODE BELOW
function functionLogger(func, arg){
    console.log("Function starting");
    func(arg);
    console.log("Function complete");
    return func(arg);
}
function func(arg){
    console.log("this is the inner function");
    return "hi";
}

