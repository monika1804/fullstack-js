//BABEL
//ECMA Script                    ===                      Javascript
const a=(x,z)=> x+z;
//JAvascript
var a =function a(x,z){
return x+z;
};



//Javascript variables
//1.let
//2.const

//let
const player = "bobby";
let experience = 100;
let wizardLevel  = false;

if(experience>90){
  let wizardLevel = true;
  console.log('inside', wizardLevel);
}
console.log('outside', wizardLevel);

// inside true 
// outside false 

//var
const player = "bobby";
let experience = 100;
var wizardLevel  = false;

if(experience>90){
  var wizardLevel = true;
  console.log('inside', wizardLevel);
}
console.log('outside', wizardLevel);

// inside true 
// outside true

//2. Const
const obj = {
  player:'bobby',
  experience:10,
  wizardLevel:false
}
obj = 5;
//it show error coz const variable is constant .. its not re-assign new variable but we change the properties of inside the const object
obj.wizardLevel = true;
// true
