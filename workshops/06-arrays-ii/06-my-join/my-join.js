// YOUR CODE BELOW
// Define a function, `myJoin`, that accepts up to two arguments:
//   1. array
//   2. separator (string, optional)

function myJoin(array, separator= ","){
    let newArray = [];
    let newString = "";
    for(let i = 0; i<array.length; i++){
        if(array[i]=== null || array[i]=== undefined){
            array[i]="";
        }
        newString+=array[i];
        if(i===array.length-1){
            break;
        }
        newString+=separator;

    }
    return newString;
}

console.log(myJoin(['a', 'b', 'c'], '+')); // => "a+b+c"
console.log(myJoin(['let\'s', 'make', 'a', 'list'], ' ')); // => "let's make  a list"
console.log(myJoin(['a', 'b', 'c'], '+')); // => "a+b+c"
console.log(myJoin(['Peter', 'Paul', 'Mary'])); // => "Peter,Paul,Mary"
console.log(myJoin(['hello', undefined, 'world'], '-'));