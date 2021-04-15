//Ternary Operator

function isUserValid(bool){
  return bool;
}
var answer = isUserValid(true)? "You may enter" : "Access  Deneid";                           //You may enter

var answer = isUserValid(false)? "You may enter" : "Access  Deneid";                          //Access  Deneid

//if else method
function condition(){
  if(isUserValid(true)){
    return "You may enter";
  }
  else{
    return "Access deneid";
  }
}
var answer2 = condition();

var automatedAnswer = "Your account # is " + (isUserValid(false) ? "1234" : "not available");     //Your account # is not available
var automatedAnswer = "Your account # is " + (isUserValid(true) ? "1234" : "not available");     //Your account # is 1234

function moveCommand(direction){
  var whatHappens;
  switch(direction){
    case "forward":
      whatHappens = "You encounter a monster";
      break;
      case "back":
        whatHappens = "You arrived home";
        break;
        case "right":
          whatHappens = "You found a river";
          break;
          case "left":
            whatHappens = "You run  into a troll";
            default:
            whatHappens = "Please enter a valid direction";
  }
  return whatHappens;
}


window.moveCommand("forward")
//"You encounter a monster"
window.moveCommand("right")
//"You found a river"


