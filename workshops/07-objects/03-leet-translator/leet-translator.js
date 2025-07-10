let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW
// translate('Fullstack')    // => 'ph|_|115+@(|<'

function leetTranslator(word){
    word = word.toLowerCase();
    let leetDict = {}
    for(let i = 0;i<letters.length;i++){
        let letter = letters[i]; //we are storing the content of letters in letter variable(letter will be used as key in our dictionary i.e. leetDict)
        let leetChar = leetChars[i]; //we are storing the content of leetchars in leetchar variable
        leetDict[letter]= leetChar; //object[key]= value; is a common syntax for creating key and value in an object;
    }
    let result = "";
    for(let i = 0; i<word.length;i++){
        let letter = word[i];
        let leetChar = leetDict[letter];
        result+=leetChar;
    }
    return result;
 
}

console.log(leetTranslator('Fullstack'))    // => 'ph|_|115+@(|<'