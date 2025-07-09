// YOUR CODE BELOW
// zeroDarkThirty(102302) // => 1232
// zeroDarkThirty(606.203) // => 66.23
function zeroDarkThirty(a){
    debugger;
    if(a===0){
        return NaN;
    }
    a = String(a);
    let newString = ""; 
    for(let i=0; i<a.length; i++){
        if(a[i]==='0'){
            continue;
    }
        newString+=a[i];   
    }
    a = Number(newString);
    return a;
}
console.log(zeroDarkThirty(2022));