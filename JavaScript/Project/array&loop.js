// var list = [ ];

// for(var i = 0; i < 1000; i++){
//   list.push({ username:"harry" + i, address:"test" + i})
// }
// var a=0;
// while(a <1000){
//   list.push(a)
//   console.log()
//   a++;
// }

// // for(var i = 0; i < 1000; i++){
// //   list.push(i)

// // }

// var i=10;
// while(i>0){
//   console.log(i);
//   i++;
// }

var list = [1,2,3,4,5,6,7,8,9,10,11,23,4,5,6,7,123,23,5,6,7,77,3225,676767676,45,78,545,45,5,5,5,54,24,5,5445,45,4,4,4,4,44,5,56,65,5,55,3535,35,53,3535,3553,42,4,5,4,45,45,46,46,4,524,534,54,4,64,64,64,64,646];
for (var i=0; i<list.length; i++){
  console.log(list[i] /3)
}

//even or odd number we use modulos operator %2
var list=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];                        //length if we dont know the total number of array
for(var i=0; i<20; i++){
  if(list[i]%2){
    console.log(i, "even Number")
  }
else{
  console.log(i, "odd Number")
}
}

var list = [];
for(var i=0; i<200; i++){
  list.push(i)
}
for(var i=0; i<200; i++){
  if(list[i]%2 == 0 ){
    console.log(i, "Even Number")
  }
  else{
    console.log(i, "Odd Number")
  }
}
