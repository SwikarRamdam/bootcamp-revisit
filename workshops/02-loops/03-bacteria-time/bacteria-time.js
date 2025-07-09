// YOUR CODE BELOW
function bacteriaTime(currentNum, targetNum){
    if(targetNum<currentNum){
        return "targetNum must be larger than currentNum";
    }
    minutes = 0;
    while(currentNum<targetNum){
     currentNum = currentNum*2;
     minutes++;
    }
     return minutes*20;
    }

console.log(bacteriaTime(40,80));