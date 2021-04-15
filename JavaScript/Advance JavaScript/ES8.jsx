'Turtle'.padStart(10)   ;              // "    Turtle"            //it gives space in the begining

'Turtle'.padEnd(10)                   // "Turtle    "             // it gives space in the end

const fun = (a, b, c, d, e) => {
  console.log(a);
}
fun(1,2,3,4)


let obj = {
  username0: 'Santa',
  username1:'Rudolf',
  username2:'Mr.Grinch'
};

Object.keys(obj).forEach((key, index) => {                //in Object.keys method it shows the value of obj items i.e username0,1,2  and in obk[key] show the value of keys items
  console.log(key, obj[key]);
})

/*  Ans.
 username0 Santa 
username1 Rudolf 
username2 Mr.Grinch
*/

Object.values(obj).forEach(value =>{                          // In this show the values of obj items
  console.log(value);
})
/*
Santa 
Rudolf 
Mr.Grinch */

Object.entries(obj).forEach(value =>{                          // In this show the values of obj items
  console.log(value);
})

Object.entries(obj).map(value => {
  return value[1]+value[0].replace('username', ' ');
})

/* 
[ "Santa 0", "Rudolf 1", "Mr.Grinch 2" ]
*/