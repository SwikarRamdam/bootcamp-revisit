// YOUR CODE BELOW
function cloneMachine(obj){
    let cloneName = obj.name + "Clone";
    let clone = {
        name : cloneName,
        species : obj.species,
        offspring : []
    }
    obj.offspring.push(cloneName);
    return clone;
}

let dolly = {
  name: 'Dolly',
  species: 'sheep',
  offspring: []
}

let dollyClone = cloneMachine(dolly);
console.log(dollyClone) // {name: 'DollyClone', species: 'sheep', offspring: []}
console.log(dolly) // {name: 'Dolly', species: 'sheep', offspring: ['DollyClone']}


// newObj = {}
// for(let key of obj){ //trying to loop throught the items/keys inside object
//     if(obj[key]===name){ //I ma trying to access the name key of the object if exists
//         name = name + "Clone"; //concatenating clone with the name value

//         obj[offspring]=name; //then pushing the concatenated name into new offspring key by creating it
//     }
// }