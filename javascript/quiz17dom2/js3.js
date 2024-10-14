// Mendapatkan elemen daftar berdasarkan ID
const myList = document.getElementById("myList");

// Membuat elemen li baru
const newItem = document.createElement("li");
newItem.textContent = "Item Baru";

// Menambahkan elemen li baru sebagai anak terakhir dari ul
myList.appendChild(newItem);