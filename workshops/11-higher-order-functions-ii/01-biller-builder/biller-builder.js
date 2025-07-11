// let price = 100;
function billerBuilder(stateName){
    return function priceCalculator(price){
    if(stateName==="NY"){
        price = (0.03*price + price) * 1.04;
    }
    else if(stateName === "NJ"){
        price =(0.05*price +price) * 1.06625;
    }
    return price;
}
}

// priceCalculator(100);
let newYorkBiller = billerBuilder("NY");
console.log(newYorkBiller(100)); // ➜ 107.12
