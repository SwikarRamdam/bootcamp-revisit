// YOUR CODE BELOW
// crazyCaps('fullstack is amazing');
function crazyCaps(str){
    let caps = "";
    for(let i = 0; i<str.length;i++){
        if(i%2!==0){
            caps += str[i].toUpperCase();
        }
        else{

            caps += str[i];
        }
    }
    return caps;
}
console.log(crazyCaps("fullstack is amazing"));


    // // console.log(i);
    //         // console.log(str[i+1]);
    //         if(str.length>i+1){
    //         caps += str[i+1].toUpperCase();
    // 