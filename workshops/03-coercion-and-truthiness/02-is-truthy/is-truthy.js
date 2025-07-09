// YOUR CODE BELOW
function isTruthy(a){
   debugger
    if(a===true){
        return true;
    }
    else if(typeof a === "number" && a){
        return true;
    }
    else if(typeof a==="string" && a){
        return true;
    }
    else if(a===false){
        return "The boolean value false is falsey";
    }
    else if(a===0){
        return "The number 0 is falsey (the only falsey number)";
    }
    else if(a===""){
        return "The empty string is falsey (the only falsey string)";
    }
    else if(a===null){
        return "The null value is falsey";
    }
    else if(a===""){
        return "The empty string is falsey (the only falsey string)";
    }
    else if(a===""){
        return "The empty string is falsey (the only falsey string)";
    }
    else if(a===undefined){
        return "undefined is falsey";
    }
    else if(a===NaN){
        return "Not a Number, also falsey";
    }

    return result;
}
console.log(isTruthy(null));


// Value	Type	Explanation
// false	boolean	literally false
// 0	number	the only falsey number
// ""	string	empty string is falsey
// null	object	represents "no value"
// undefined	undefined	value not assigned
// NaN	number	"Not a Number", also falsey


// isTruthy('I yearn for truth'); // => true
// isTruthy(null); // => The null value is falsey

// 'The boolean value false is falsey'
// 'The null value is falsey'
// 'undefined is falsey'
// 'The number 0 is falsey (the only falsey number)'
// 'The empty string is falsey (the only falsey string)'