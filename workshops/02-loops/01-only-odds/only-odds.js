// YOUR CODE BELOW
// onlyOdds(6); // => 9 (5 + 3 + 1)
function onlyOdds(num){
    let sum = 0;
    for(let i = num; i>0;i--){
        if(i%2!==0){
            sum +=i;
        }
    }
    return sum;
}