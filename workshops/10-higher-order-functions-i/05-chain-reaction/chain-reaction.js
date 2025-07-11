// YOUR CODE BELOW
function chainReaction(startVal, arrFun){
    for(let i = 0; i<arrFun.length; i++){
        startVal = arrFun[i](startVal);     
    }
    return startVal;
}

function addTen(num) {
  return num + 10;
}

function subtractFive(num) {
  return num - 5;
}

function multiplyFive(num) {
  return num * 5;
}

console.log(chainReaction(0, [addTen, subtractFive, multiplyFive])); // => 25