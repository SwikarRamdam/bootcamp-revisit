// YOUR CODE BELOW
// myAnd(1, 'apples', true) === (1 && 'apples' && true); // => true
// or loves true , & loves false
function myOr(a,b,c){
    if(a){
        return a;
    }
    else if(b){
        return b;
    }
    else if(c){
        return c;
    }
    else 
    return c;
}
// console.log(myOr((1, 'apples', true) === (1 && 'apples' && true)));
// console.log(myOr(true, true, false) === (true || true || false)); // => true
// console.log(myOr(false, 1, false)); // => true


function myAnd(a,b,c){
    if(!a){
        return a;
    }
    else if(!b){
        return b;
    }
    else if(!c){
        return c;
    }
    else 
    return c;
}

console.log(myAnd(false, 1, false));
