// YOUR CODE BELOW
function justInCamelCase(underName) {

  let camelCaseoutput = "";
    let foundUnder = false;
    for(let i = 0; i<underName.length; i++) {
    if (underName[i] === "_") {
      foundUnder = true;
      } else {
        if (foundUnder) {
        camelCaseoutput += underName[i].toUpperCase();
      foundUnder = false;
    } else {
      camelCaseoutput += underName[i];
      }
  }
  }
      return camelCaseoutput;

}
