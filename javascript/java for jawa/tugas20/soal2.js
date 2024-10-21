// Ambil elemen div
const div = document.getElementById('myDiv');

// Warna awal dan warna saat mouseover
const warnaAwal = 'lightblue';
const warnaHover = 'lightgreen';

// Fungsi untuk mengubah warna saat mouseover
function mouseOver() {
    div.style.backgroundColor = warnaHover;
}

// Fungsi untuk mengembalikan warna saat mouseout
function mouseOut() {
    div.style.backgroundColor = warnaAwal;
}

// Tambahkan event listener
div.addEventListener('mouseover', mouseOver);
div.addEventListener('mouseout', mouseOut);