const basket = ['apples', 'orange', 'grapes']
 
for (let i = 0; i<basket.length; i++){                             //For loop             
  console.log(basket[i]);
}
basket.forEach(item =>{                                             // forEach
  console.log(item);
})

// For loop is two types 1.for of  2. for in
//for of
//Iterating = array, string

for(item of basket){
  console.log(item);
}   
/* apples 
orange 
grapes */

for (item of 'basket'){
  console.log(item);
}                                          //   if we take  array(basket ) in string
/*
b 
a 
s 
k 
e 
t
*/

//for in loop

const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

for(item in detailedBasket){
  console.log(item)
}