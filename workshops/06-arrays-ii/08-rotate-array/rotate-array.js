// YOUR CODE BELOW
// Define a function, `rotateArray`, that accepts two arguments:
//   1. originalArray (array)
//   2. rotateNum (number)

function rotateArray(originalArray, rotateNum){ //[1,2,3,4,5],2
    let front = originalArray.slice(-rotateNum); // [4]as -2 makes it start counting from the last 2nd index which is 4
    let end = originalArray.slice(0,-rotateNum); //in this case, when startidx is assgined, it starts counting from that start index upto the last index which is -rotateNum but without including the last item

    return front.concat(end);  
}


console.log(rotateArray([1,2,3,4,5],2))
// console.log(rotateArray([1, 2, 3, 4, 5], -1)) // => [2, 3, 4, 5, 1]


// function rotateArray(originalArray, rotateNum) {
//   let front = originalArray.slice(-rotateNum);
//   let end = originalArray.slice(0, -rotateNum);

//   return front.concat(end);
// }



// let result = [];
// if(rotateNum>0){
//     let b  = originalArray.pop();
//     result.push(b);

//     for(let i =0; i<originalArray.length;i++){
//         result.push(originalArray[i]);
//     }
// }

// else if(rotateNum<0){
//     let b = originalArray.shift();
    
//     for(let i =0; i<originalArray.length;i++){ //original Array = 2,3,4,5
//         result.push(originalArray[i]);
//     }
//     result.push(b);
// }

// else return originalArray;

// return result;