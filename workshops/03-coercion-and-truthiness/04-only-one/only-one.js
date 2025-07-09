// YOUR CODE BELOW
// onlyOne(false, false, true); // => true
// onlyOne(0, 1, 2) // => false
function onlyOne(a,b,c){
    if(a && !b && !c){
        return true;
    }
    else if(!a && b && !c){
         return true;
    }
    else if(!a && !b && c){
         return true;
    }
    else return false; 
    
}