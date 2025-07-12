// YOUR CODE BELOW
//object method is a function that is stored as property of object
let me = {
    name: "Swikar",
    // getGreeting: function(){
    // }
    getGreeting(){
        return "Hi, my name is " + this.name + ".";
    }
}
console.log(me.name); // 'Kat'
console.log(me.getGreeting()); // => 'Hi, my name is Kat.'