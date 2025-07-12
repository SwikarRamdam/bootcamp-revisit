// YOUR CODE BELOW
function callThemAll(obj, value){
    let arr = [];
    for(let key in obj){
        if(typeof obj[key] === 'function'){
            let a = arr.push(obj[key](value))
        }
 
    }
    return arr;
    
}


addString = {
    method1(val){
        return val + " of method1"
    },

    method2(val){
    return val + " of method2"
}
}
console.log(callThemAll(addString, "String"));

        // key() //cannot directly invoke function as key is just a string, instead we should access it like
    
        // let a = obj[key](value);
        // arr.push(a);
        //can be directly done as