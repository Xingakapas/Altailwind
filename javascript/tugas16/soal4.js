// Ambil elemen dengan id "colorBox"
const colorBox = document.getElementById('colorBox');

// Minta pengguna memasukkan warna
const warna = prompt("Masukkan warna (misal: red, blue, green):");

// Periksa apakah warna valid
if (warna === "red" || warna === "blue" || warna === "green") {
  colorBox.style.color = warna;
} else {
  alert("Warna tidak valid. Silakan masukkan warna yang benar.");
}