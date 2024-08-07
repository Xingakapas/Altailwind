//deklarsaiarray
let identity = ["Nama Anda", "Usia Anda", "Kota Asal Anda"];
console.log(identity[1]); 

//soal2
identity[0] = "Belakang nama";
console.log(identity); 

//soal3
let Bwah = ["apel", "pisang", "mangga"];
Bwah.splice(1, 1); 
console.log(Bwah);

//soal4
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let Arrayfus = array1.concat(array2);
console.log(Arrayfus); 

//soal5
let Siapa = identity.indexOf("Askot");
console.log(Siapa); 

//soal6
let numbers = [34, 7, 23, 32, 5];
numbers.sort(function(a, b) {
  return a - b; 
});
console.log(numbers); 

//soal7
let count = numbers.length;
console.log(count); 


