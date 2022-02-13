// 2d array
["a", "b", "c"] // array of strings 
[1,2,3] // array of numbers
let array2d = [
  ["BMW", 2, null,45],
  [4, true, 6],
  [7, "8", 9],
  [7, "8", 9],
]; //array of arrays

console.log(array2d); //prints 2d array
console.table(array2d); // prints 2d array in the from of a table 
let res = array2d[1]; //[ 4, 5, 6 ] 
console.log("printing of res array");
console.log(res);
console.log("res of 2nd index ");
console.log(res[2]);
console.log(array2d[1][2]);
console.log(array2d[1][3]); //undefined 
console.log(array2d.length); // number of rows in a 2d array 
console.log(array2d[0].length) // number of columns in a 2d array
// memory allocation in 2d 
// 2d mein value kaise daale
array2d[1][1] = false;
console.table(array2d);

