// Buat array item
const items = ["Item 1", "Item 2", "Item 3"];

// Buat elemen ul
const list = document.createElement('ul');

// Tambahkan item ke list
items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
});

// Ambil elemen div dengan id "konten" dan tambahkan list ke dalamnya
const kontenDiv = document.getElementById('konten');
kontenDiv.appendChild(list);

// Hapus elemen li pertama
const firstItem = list.firstElementChild;
list.removeChild(firstItem);