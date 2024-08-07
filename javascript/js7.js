let person = {
    name: "Alice",
    age: 28,
    city: "London"
};


console.log("Nama:", person.name);
person.age += 3; 
console.log("Umur baru:", person.age);


delete person.city;
console.log("Setelah dihapus:", person);

for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  

