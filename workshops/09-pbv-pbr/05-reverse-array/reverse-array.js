function reverseArray(arr){
    let left = 0;
    let right = arr.length-1;
    while(left<right){
        let temp= arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }
    return arr;
}
// YOUR CODE BELOW
// let myArray = [1, 2, 3, 4];
// reverse(myArray);
// console.log(myArray) // [4, 3, 2, 1]

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

// function reverseArray(arr){
//     let result = [];
//     for(let i = arr.length-1; i>=0; i--){
//         result.push(arr[i]);
//     }
//     return result;
// }
// console.log(reverseArray([1,2,3,4,5]));

// function reverseArray(array){
//     let temp = [];
//     while(array.length>0){
//         temp.unshift(array.pop());
//     }
//     for(let i =0; i<temp.length; i++){
//         array.push(temp[i])
//     }
//     return array;
// }

// function reverseArray(array){
//     let left = 0;
//     let right = array.length - 1;

//     while (left < right) {
//         // Swap values at left and right
//         let temp = array[left];
//         array[left] = array[right];
//         array[right] = temp;

//         left++;
//         right--;
//     }

//     return array;
// }

