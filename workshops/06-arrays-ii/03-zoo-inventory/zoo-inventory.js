// YOUR CODE BELOW
// zooInventory(myZoo);
/* => ['King Kong the gorilla is 42.',
       'Nemo the fish is 5.'
       'Punxsutawney Phil the groundhog is 11.']
*/
let myZoo = [
  ["King Kong", ["gorilla", 42]],
  ["Nemo", ["fish", 5]],
  ["Punxsutawney Phil", ["groundhog", 11]],
];

function zooInventory(myZoo) {
  let newArray = [];
    // let sentence = " ";
  for (let i = 0; i < myZoo.length; i++) {
    let name = myZoo[i][0];
    let animal = myZoo[i][1][0];
    let age = myZoo[i][1][1];

    let sentence = `${name} the ${animal} is ${age}.`;
    newArray.push(sentence);
  }


  return newArray;
}
console.log(zooInventory(myZoo));
