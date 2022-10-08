// 2.DataTypes
// Boolean
// String
// Number
// Symbol
// null
// undefined
// Object



// 2-masala
const array = ["Keep" , "Remove" , "Keep" , "Remove" ,] ;
const empty = []

let myFunc = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if(array[i] !== "Remove" ){
      empty.push(array[i])
    }
  }
}

console.log(myFunc(array));
// 2-masala tugadi


