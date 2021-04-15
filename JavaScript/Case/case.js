var firstNumber = prompt("Enter First Number");
var secondNumber = prompt ("Enter Second Number");
var sum = Number(firstNumber) + Number(secondNumber);                 //add
alert(sum);

var sum = Number(firstNumber) + Number(secondNumber);                 //sub
if(firstNumber > secondNumber){
  alert(firstNumber - secondNumber);
}
else{
  alert(secondNumber - firstNumber);
}
var mul = Number(firstNumber) * Number(secondNumber);                   //mul
alert(mul);

var div = Number(firstNumber) / Number(secondNumber);                   //div
alert(div);