let tacoCatInc = {
  gourmetShell: {
    "hard treat shell": { cost: 2, quantity: 100 },
    "soft treat shell": { cost: 1.5, quantity: 100 },
  },

  gourmetFishFilling: {
    salmon: { cost: 5, quantity: 100 },
    tuna: { cost: 5.5, quantity: 100 },
    sardines: { cost: 1.5, quantity: 100 },
  },

  gourmetVeggie: {
    "cat grass": { cost: 1, quantity: 100 },
  },

  gourmetSeasoning: {
    "cat nip": { cost: 0.5, quantity: 100 },
    "treat dust": { cost: 0.1, quantity: 100 },
  },

  cash: 0,

  currentInventory() {
    let sum = 0;

    for (let category in tacoCatInc) {
      if (category !== "cash") {
        // category !==cash is wrong as it looks for variable cash which is not defined here
        for (let ingredients in this[category]) {
          //use this wherever feasible
          let cost = this[category][ingredients].cost;
          let quantity = this[category][ingredients].quantity;
          sum += cost * quantity;
        }
      }
    }
    return sum;
  },

  sale(orderObj) {
    let price = 0;
    for (let category in orderObj) {
      let ingredients = orderObj[category]; //why this[category] is wrong? because when you call function it will be called as tacoCatInc.sale(), here the object name before the dot is what this (used wherever inside the function) will refer to. The fact that passing the orderObj as parameter doesn't really affect what this should refer to.
      let cost = this[category][ingredients].cost; //tacoCatInc -> hard treat shell.cost
      tacoCatInc[category][ingredients].quantity =
        this[category][ingredients].quantity - 1; //tacoCatInc -> hard treat shell.cost
      price += cost;
    }
    this.cash += price;
    return price;
  },
};

let order = {
  gourmetShell: "hard treat shell",
  gourmetFishFilling: "salmon",
};
