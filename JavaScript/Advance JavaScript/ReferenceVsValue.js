// By Reference  VS By Value

var a= 5;
var b = a;
b++

console.log(a);       //5
console.log(b);       //6

//Object passes by Reference

let obj1 = { name: 'Yao', password : '123'};
let obj2 = obj1;
pbj2.password = 'easypeasy'

console.log(obj1)
console.log(obj2);


var c = [1, 2, 3, 4, 5];
var d = c;
d.push(885858)
console.log(d)                      //Array(6) [ 1, 2, 3, 4, 5, 885858 ]
console.log(c)                      //Array(6) [ 1, 2, 3, 4, 5, 885858 ]
m






var c = [1, 2, 3, 4, 5];            //Array(5) [ 1, 2, 3, 4, 5 ]
var d = [].concat(c);               //[ 1, 2, 3, 4, 5, 7896 ]
d.push(7896)
console.log(c);

let obj = {a: 'a', b: 'b', c:'c'};
let clone = Object.assign({}, obj);
let clone2 = {...obj}
obj.c = 5 ;
console.log(obj)                      //Object { a: "a", b: "b", c: 5 }
console.log(clone)                    //Object { a: "a", b: "b", c: "c" }
console.log(clone2)                   //Object { a: "a", b: "b", c: "c" }