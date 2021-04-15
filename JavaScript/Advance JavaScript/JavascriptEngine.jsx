//Memory Heap
const a = 1;
const b = 2;
const c = 100;

//Call stack
 console.log('1');
 console.log('2');
 console.log('3');

 const one = () => {
   const two = () =>{
     console.log('4');
   }
   two();
 }


 //asynchronous
 console.log('1');
 setTimeout(()=>{
   console.log('2');
 }, 2000)
 console.log('3');              
 // it show the value 1 , 3 and thw value 2 is after 2 second
 