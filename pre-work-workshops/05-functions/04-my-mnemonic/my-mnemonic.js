// YOUR CODE BELOW
function myMnemonic(a, b, c, d){
    let result= "";
    if(a) result+=a[0];
    if(b) result+=b[0];
    if(c) result+=c[0];
    if(d) result+=d[0];
    return result;
    // if(e) result+=e[0];
    // return a[0]+second[0]+third[0]+forth[0]
}
// console.log(myMnemonic('Must', 'Accept', 'Sugar', 'Happiness'));
console.log(myMnemonic('We', 'Eat', 'Eggs'));