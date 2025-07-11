function mySplice(array, startIndex, deleteCount, newValue){
    debugger;
    let deletedElements = [];
    let storedElements = [];

    for(let i =0; i<startIndex;i++){
        storedElements.push(array[i]);
    }

    if(newValue!==undefined){
        storedElements.push(newValue);
    }

    for(let i = startIndex; i<startIndex+deleteCount ; i++){
        deletedElements.push(array[i]);
    }

    for(let i = startIndex+deleteCount; i<array.length; i++){
        storedElements.push(array[i]);
    }

    // array = storedElements;
    array.length = 0;
for (let item of storedElements) {
    array.push(item);
}

    return deletedElements; 
}

let myArray = [1, 2, 3];

console.log(mySplice(myArray, 1, 1, 'apples')) // => [2]
console.log(myArray)