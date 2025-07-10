// YOUR CODE BELOW
let transactions = [
  {
    name: "Tons of glitter",
    amount: 70
  },
  {
    name: "Porcelain Pink Flamingos",
    amount: 92
  },
  {
    name: "Chandelier replacement",
    amount: 10000,
  },
  {
    name: "Dinner at TGIF x6",
    amount: 350
  }
];

function lastFridayNight(obj){
    let total = 0;
    for (let i = 0; i<obj.length; i++){
        total += obj[i].amount;
    }
    return total;
}

console.log(lastFridayNight(transactions)) // => 10512