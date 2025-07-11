// YOUR CODE BELOW
function cacheSavings(callFun){ //1
    debugger;
    const cache = {}; //3

    function newFunc(arg){
        debugger;
        if(cache.hasOwnProperty(arg)){ //3
            return cache[arg];
        }
        let result = callFun(arg);//2
        cache[arg] = result; //3
        return result;
    }

    return newFunc;

}


let callFun = function call(a){
    return "hi"+a;
}

let myCache = cacheSavings(callFun); //newFunc
console.log(myCache('Swikar'));
console.log(myCache('Swikar'));
console.log(myCache('Ram'));


