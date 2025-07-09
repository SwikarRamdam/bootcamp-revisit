// Edit the code below
let planet = 'Planet Earth';

function fullstackHQ(){
  return middleFunction('United States');

  function middleFunction(state) {
    return innerFunction('New York State');

    function innerFunction(city) {
      place = 'New York City';
      return innermostFunction();

      function innermostFunction() {
        return 'Fullstack HQ is at ' + planet + ', ' + state + ', ' + city + ", " + place;
      }
    }
  }
}
console.log(fullstackHQ());
// => Fullstack HQ is at Planet Earth, United States, New York State, New York City

// The only things you should change are the parameter and/or variable names.