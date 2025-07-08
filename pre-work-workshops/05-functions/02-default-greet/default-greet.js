// YOUR CODE BELOW
function defaultGreet(firstName, lastName){
    if(lastName === undefined){
        return "Hi "+ firstName +" " + "Doe!"
    }
    else{
    return "Hi " + firstName + " " + lastName + "!" 
    }
}

result = defaultGreet('Chaka', 'Khan');
console.log(result);

