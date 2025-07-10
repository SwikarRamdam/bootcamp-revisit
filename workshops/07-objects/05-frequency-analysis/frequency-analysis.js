// YOUR CODE BELOW
// frequencyAnalysis('abca'); // => {a: 2, b: 1, c: 1}
function frequencyAnalysis(string){
    let strArr  = string.split();
    freq = {};
    for(let index in string){
        let char = string[index];
        if(freq[char]){
            freq[char]+=1;
        }
        else{
            freq[char] = 1;
        }
    }
    return freq;
}
console.log(frequencyAnalysis('abca'));