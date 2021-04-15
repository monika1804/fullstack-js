var b = "Can I access This?";                               //scope
function bb(){
  var a ="hello";
  console.log(b);
}
bb();

//Root
var fun = 5;
function funfunction(){
  var fun = "hello";
console.log(1, fun);
}
function funerfunction(){
  var fun ="Bye";
console.log(2, fun);
}
function funestfunction(){
  fun = "AAHHH";
console.log(3, fun);
}
console.log("window", fun);
funfunction();
funerfunction();
funerfunction();


//context vs scope
function a(){
  console.log(this);
}
a();

//next
const object4 = {
  a:function(){
    console.log(this);
  }
}
object4.a();