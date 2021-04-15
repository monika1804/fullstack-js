const { object } = require("prop-types");

const array =[1,2,3,4,5]
array.flat();

const array2 =[1,[2,3],[4,5]]
array2.flat();

const array3 =[1,2,[3,4,[5]]]
array3.flat();

//entries.flat()
const entries = ['bob', 'sally', ,,,,,'cindy']                          // [ "bob", "sally", "cindy" ]
entries.flat()

const userEmail1 = '  abc@gmail.com'
const userEmail2 = ' johny@gmail.com    '
console.log(userEmail1.trimStart())
console.log(userEmail2.trimEnd())
/*
abc@gmail.com 
johny@gmail.com   */

userProfiles = [['commander Tom', 23], ['derek', 24], ['Rizzon', 25]]
object.fromEntries(userProfiles)

// try and catch
try{
  4 + 5
}catch{
  console.log('you messed up')
}                                                             //9

try{
  true + 'hi'
} catch{
  console.log('you messesd up')
}                                                           //"truehi"

try{
  bob + 'hi'
}catch{
  console.log('you messesd up')
}                                                         //you messesd up


try{
  bob + 'hi'
}catch (error){
  console.log('you messesd up' + error)
}                                                       //you messesd upReferenceError: bob is not defined

 