//Latest Feature of ES
//ES2020!!
//  1.BigInt =  Big Integer

typeof 4                                  // => Number
typeof true                               // => boolean
typeof 1n                                 // => "bigint"
typeof 14545654675897598709803954        //=>"number"


Number.MAX_SAFE_INTEGER                 //9007199254740991
9007199254740991 + 1        //9007199254740992 its work
9007199254740991 + 10       //9007199254741000  its doesnt work coz its work only in single digit no. (1 to 9)

9007199254741000n - 1n            //9007199254740999n  its work when we use n(Bigint) in both number 
9007199254740991n + 10n           //9007199254741001n

//    2.Nullish Coalescing Operator??
//?? = it is use ?? instead of || operator. ?? operator check the value is no or undefined

let andrei_pokemon = {
  pikachu : {
    species: 'Mouse Pokemon',
    height: 0.8,
    weight: 30,
    power:0
  }
}
let power = andrei_pokemon ?.pikachu?.power ?? "no power"                                       //0
console.log(power)

// if we use || operator them it return the no power value
let power = andrei_pokemon ?.pikachu?.power || "no power"                                
console.log(power)                                                                              //no power