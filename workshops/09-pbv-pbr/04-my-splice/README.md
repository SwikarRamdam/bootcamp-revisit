### My Splice

Write a 'mySplice' function that mirrors the behavior of JavaScript's .splice()
array method. However, mySplice should accept the array to operate on as an
argument, rather than being invoked as a method on that array.

mySplice only needs to take one element to add to the array (the .splice method
can actually take any number of values to add).

Do not use .splice in your function.


```javascript
let myArray = [1, 2, 3];

mySplice(myArray, 1, 1, 'apples') // => [2]

console.log(myArray)    // [1,'apples', 3]
```
// // YOUR CODE BELOW
// function mySplice(array, startIndex, deleteCount, newValue) {
//   let removedElements = [];
//   let keptElements = [];

//   //keeping all elements before the start index
//   for (let i = 0; i < startIndex; i++) {
//     keptElements.push(array[i]);
//   }

//   //at startIdx , add the newValue
//   if (newValue !== undefined) {
//     keptElements.push(newValue);
//   }
//   //keeping all elements that are removed at removedElements
//   for (let i = startIndex; i < startIndex + deleteCount; i++) {
//     removedElements.push(array[i]);
//   }
//   //keeping all elements that are remained at keptElements Array
//   for (let i = startIndex + deleteCount; i < array.length; i++) {
//     keptElements.push(array[i]);
//   }
//   //making original array empty
//   while (array.length) {
//     array.pop();
//   }

//   //pushing only those elements that are kept in the keptElements array
//   for (let i = 0; i < keptElements.length; i++) {
//     array.push(keptElements[i]);
//   }

//   return removedElements;
// }