// YOUR CODE BELOW
function getDogBreeder(defaultName, defaultAge=0){
    
    return function dogBreeder(arg1=defaultName, arg2 =defaultAge){
      
    let dog = {};
    if(typeof arg1 === "string"){
        name =arg1;
        age = arg2;
    }
    else {
        age = arg1;
        name = defaultName;
    }
    dog.name = name;
    dog.age = age;
    return dog;
}

}

    let dogBreeder = getDogBreeder('Rufus', 5)
        let returnedValue = dogBreeder(10);

        let expectedValue = {
          name: 'Rufus',
          age: 10
        };
