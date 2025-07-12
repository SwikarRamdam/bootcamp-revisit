// YOUR CODE BELOW
let me2 = {
    name : "Swikar",
    getGreeting (friend){
        return `Hi ${friend.name}, my name is ${this.name}.`
    }
}

let friend = {
    name: "Ashok"
}

console.log(me2.getGreeting());