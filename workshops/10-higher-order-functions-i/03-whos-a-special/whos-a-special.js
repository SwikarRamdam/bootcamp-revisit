// YOUR CODE BELOW
let specialPets = [{
    name: 'Sadie',
    species: 'cat'
  }, {
    name: 'Layla',
    species: 'cat'
  }, {
    name: 'Bogie',
    species: 'dog'
  }
];

function whosASpecial(petArr){
    let str = "";
    petArr.forEach((value)=>{
        str+= `${value.name} the ${value.species} is very special! `
    }
)
    return str.trim();
}
console.log(whosASpecial(specialPets));