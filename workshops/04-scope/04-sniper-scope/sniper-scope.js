let bond = '007';

function oddJob() {
 
  let AgentinScope = (bond === '007');
  let prediction = true; // bond is defined globally

  return AgentinScope === prediction;
}


function goldFinger(bond) {

  let AgentinScope = (bond === '007') //false
  let prediction = false; // because bond is not defined in this scope

  return AgentinScope === prediction;
}


function scaramanga(target) {

  // target = bond;

  let AgentinScope = (bond === '007')
  let prediction = true; // because bond is accessible globally, by equating target with bond we made it local? so 

  return AgentinScope === prediction;
}


function drNo() {

  let bond = 'Body Double';

  let AgentinScope = (bond === '007');
  let prediction = false; // YOUR BOOLEAN PREDICTION HERE

  return AgentinScope === prediction;
}


function jaws(agent) {

  agent = bond;
  bond = 'Body Double';

  let AgentinScope = (agent === '007');
  let prediction = true; // YOUR BOOLEAN PREDICTION HERE

  return AgentinScope === prediction;
}


function elChiffre() {

  let agent = bond;
  bond = 'Body Double';

  let AgentinScope = (agent === '007');
  let prediction = false; // YOUR BOOLEAN PREDICTION HERE

  return AgentinScope === prediction;
  
}
