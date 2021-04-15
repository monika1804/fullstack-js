const array = [1, 2, 10, 16];
const double = [ ]
const newArray = array.forEach(num =>{
  double.push(num * 2);
})
console.log('forEach', double);

// [ 2, 4, 20, 32 ]

//map, filter, reduce
//map     
const mapArray = array.map(num =>  num * 2);
console.log('map', mapArray); 

//filter                                              use to filterthe array (i.e., ===, >, <)
const  filterArray = array.filter(num => num > 5 );
console.log('filter', filterArray);
//[ 10, 16 ]

//reduce
const reduceArray = array.reduce((accumulator, num)=>{
  return accumulator + num
}, 0);
console.log('reduce', reduceArray)
//29    (0+1=1, 1+2=3, 3+10=13, 13+16=29)