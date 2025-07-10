// YOUR CODE BELOW
// removeColumns([[1, 2, 3],
//                [1, 2, 3],
//                [1, 2, 3],
//                [1, 2, 3]], 2);
/* => [[1],
       [1],
       [1],
       [1]]
*/

// function removeColumns(arr, col){

//     let newArr = [];
//     for(let i = 0; i<arr.length; i++){
//         for(let j = 1; j<=col;j++)
//         arr.pop([i][arr[i].length-j]);
//     }

//     return newArr;
// }
// console.log(removeColumns([1, 2, 3],1));


// function removeColumns(originalGrid, numColumns) {
//   let newGrid = [];

//   for (let i = 0; i < originalGrid.length; i++) {
//     let row = originalGrid[i];

//     // Slice from start to (length - numColumns) to remove columns from end
//     let newRow = row.slice(0, row.length - numColumns);

//     newGrid.push(newRow);
//   }

//   return newGrid;
// }

function removeColumns(arr, col){
    let newGrid = [];
    for(let i = 0;i<arr.length;i++){
        let row = arr[i];
        
        let newRow = row.slice(0,row.length - col);
        newGrid.push(newRow);
    }
    return newGrid;
}
console.log(removeColumns([[1, 2, 3],
               [1, 2, 3],
               [1, 2, 3],
               [1, 2, 3]], 1));