// YOUR CODE BELOW
// Define a function, `dogBreeder`, that accepts up to two optional arguments:
//   1. name (string)
//   2. age (number)

function dogBreeder(arg1= "Steve", arg2 = 0){
    let dog = {};
    if(typeof arg1 === "string"){
        name =arg1;
        age = arg2 || 0;
    } 
    else {
        age = arg1;
        name = "Steve"
    }
    dog.name = name;
    dog.age = age;
    return dog;
}
console.log(dogBreeder("Hero",20))
console.log(dogBreeder(20))