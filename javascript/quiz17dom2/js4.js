// Mendapatkan elemen daftar berdasarkan ID
const myList = document.getElementById("myList");

// Membuat elemen li baru
const newItem = document.createElement("li");
newItem.textContent = "Item Disisipkan";

// Menyisipkan elemen li baru sebagai anak pertama dari ul
myList.insertBefore(newItem, myList.firstChild);