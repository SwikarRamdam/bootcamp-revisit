// YOUR CODE BELOW
function mostVowels(str){
    debugger
    str = str.toLowerCase();
    let words = str.split(' ');
    let count = 0;
    ourWord = "";
    for(let i =0; i<words.length;i++){
        let currWord = words[i];
        per_count = 0;
        for(let j = 0;j<currWord.length;j++){
            if(currWord[j]=== "a" || currWord[j]=== "e" ||currWord[j]=== "i"|| currWord[j]=== "o"|| currWord[j]=== "u"){
                per_count++;
            }    
        }
        if (per_count>count){
            count = per_count;
            ourWord = currWord;
        }
          

    }
    return ourWord;
}

// console.log(mostVowels('I am a keeper with some real rhythms')); // => keeperI did
mostVowels('try my gym');