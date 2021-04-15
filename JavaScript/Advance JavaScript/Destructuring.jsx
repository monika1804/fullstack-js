const obj={
  player:'bobby',
  experience:100,
  wizardLevel:false
}

//destructing method use like this
const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

//or
const { player, experience } = obj;
let { wizardLevel }= obj;

//object properties
const  name = 'john snow';
const obj = {
  [name] :' hello',
  [1+2]  : 'hihi'
}

// Object { 3: "hihi", "john snow": " hello" }

//Template strings
const name = "sally";
const age = 34;
const pet = 'horse';

const greetingBest = `Hello ${name} you seem to be ${ age-10 }. What a lovely ${pet} you have.`

//"Hello sally you seem to be 24. What a lovely horse you have."

// default argument
function greet(name ='', age= 30, pet='cat'){
  return `Hello ${name} you seem to be ${ age-10 }. What a lovely ${pet} you have.`
}

// => greet()
//"Hello  you seem to be 20. What a lovely cat you have."

​