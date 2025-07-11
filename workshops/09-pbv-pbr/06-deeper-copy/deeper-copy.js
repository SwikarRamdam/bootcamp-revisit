// YOUR CODE BELOW

function deeperCopy(arr){
    let mainCopy = [];
    for(let i =0; i<arr.length;i++){
        if(Array.isArray(arr[i])){
            let newCopy = [];//[1,2]
            for(let j =0;j<arr[i].length;j++){
                newCopy.push(arr[i][j]);
            }
            mainCopy.push(newCopy);//[1,2]
        }
        else
        mainCopy.push(arr[i]);
    }
    return mainCopy;
}
console.log(deeperCopy([1,[1,2],1]))