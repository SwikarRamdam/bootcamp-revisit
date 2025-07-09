// // YOUR CODE BELOW
// // Define a function, `myIndexOf`, that accepts three arguments:
// //   1. source (string)
// //   2. searchValue (string)
// //   3. startIdx (number) - optional

// // If the `source` contains the `searchValue`, return the index at which the
// // `searchValue` starts. If the `searchValue` appears more than once in the
// // `source`, return the index from the first occurance of the `searchValue`.
// // If the `searchValue` doesn't exist in the `source`, return -1.

// // If a startIdx is passed into the function, ignore any instances of the
// // `searchValue` that occur before that index. If no `startIdx` is provided,
// // start searching from the beginning of the `source`.

// function myIndexOf(source,searchValue,startIdx ){
//     debugger;
//     if(!startIdx){
//         startIdx =0;
//     }
//     if(!searchValue){
//         result=-1;
//     }

//     for(let i=startIdx; i<source.length; i++){
//         if(source[i]===searchValue[0]){
//             for(let j=0; j<searchValue.length;j++){
//                 let curSearch = searchValue[j];
//                 if(curSearch===source[i]){
//                     i++;
//                 }
//             }
//         }
//         result = j;
//         break

//     }
//     return result;

// }
// // console.log(myIndexOf('hello', 'o')); //4
// console.log(myIndexOf('happy string', 'sad')); //=> -1


function myIndexOf(source, searchValue, startIdx = 0) {
   
    for (let i = startIdx; i <= source.length - searchValue.length; i++) {
        let match = true;
        for (let j = 0; j < searchValue.length; j++) {
            if (source[i + j] !== searchValue[j]) {
                match = false;
                break;
            }
        }
        if (match) return i;
    }
    return -1;
}

console.log(myIndexOf('twice twice ok', 'ice', 5)); //8