// YOUR CODE BELOW
function taxCalculator(price, state){
    if(state === "NY"){

        return price + 4/100 * price;
    }
    else if (state === "NJ"){
        return price + 6.625/100 * price;
    }

}
taxCalculator(100, 'NY');