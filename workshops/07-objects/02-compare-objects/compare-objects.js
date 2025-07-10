// YOUR CODE BELOW
// compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 })
function compareObjects(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  let keys1 = Object.keys(obj1);
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(compareObjects({ name: "zeke" }, { name: "zeke", age: 12 }));
console.log(compareObjects({ name: "zeke" }, { name: "zeke" }));

// Understanding

//Object.keys(object_name) gives keys present in the objects
//Object.keys(object_name).length gives number of keys present in the object
// object =  {
//     name: "ram",
//     age:20
// }
// console.log(Object.keys(object).length);

// Algorithm

/*
Get their keys with Object.keys(obj)

Check that both objects have the same number of keys

Check that each key in one object exists in the other, and their values are equal
*/
