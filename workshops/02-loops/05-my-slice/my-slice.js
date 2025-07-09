// YOUR CODE BELOW
function mySlice(originalString,startIdx, endIdx){
    debugger;
    let slicedStr = "";
    if(!startIdx){
        startIdx =0;
    }
    if(!endIdx){
        endIdx=originalString.length;
    }
    for(let i = startIdx; i < endIdx; i++){
        slicedStr+= originalString[i];
    }
    return slicedStr;
}
console.log(mySlice("slice and dice",4));