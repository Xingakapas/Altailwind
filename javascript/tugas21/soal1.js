const form = document.getElementById('form-nama');
const namaInput = document.getElementById('nama');
const tampilNama = document.getElementById('tampil-nama');

// Ambil nama dari localStorage saat halaman dimuat
const namaTersimpan = localStorage.getItem('username');

// Tampilkan nama jika sudah ada, jika tidak tampilkan pesan
if (namaTersimpan) {
  tampilNama.textContent = `Nama Anda: ${namaTersimpan}`;
} else {
  tampilNama.textContent = 'Anda belum menyimpan nama.';
}

// Simpan nama ke localStorage saat form dikirim
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const namaBaru = namaInput.value;
  localStorage.setItem('username', namaBaru);
  tampilNama.textContent = `Nama Anda: ${namaBaru}`;
  namaInput.value = '';
});