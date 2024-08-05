// Membuat sebuah Set baru
const mySet = new Set();

// Menambahkan nilai ke Set
mySet.add(1);
mySet.add("hello");
mySet.add({name: "John"});

// Nilai duplikat akan diabaikan
mySet.add(1); // Tidak akan ditambahkan karena sudah ada

// Menghapus nilai dari Set
mySet.delete("hello");

// Memeriksa apakah suatu nilai ada dalam Set
console.log(mySet.has(1)); // Output: true
console.log(mySet.has("hello")); // Output: false

// Mengakses semua nilai dalam Set (iterasi)
for (let item of mySet) {
  console.log(item);
}

// Mengubah Set menjadi array
const myArray = [...mySet];
console.log(myArray);
