const form = document.getElementById('form-nama');
const namaInput = document.getElementById('nama');
const tampilNama = document.getElementById('tampil-nama');
const status = document.getElementById('status');

// Ambil nama dari localStorage saat halaman dimuat dan periksa status
const namaTersimpan = localStorage.getItem('username');

if (namaTersimpan) {
  tampilNama.textContent = `Nama Anda: ${namaTersimpan}`;
  status.textContent = 'Nama pengguna saat ini tersedia.';
} else {
  tampilNama.textContent = 'Anda belum menyimpan nama.';
  status.textContent = 'Nama pengguna belum tersedia.';
}

// Simpan nama ke localStorage saat form dikirim
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const namaBaru = namaInput.value;
  localStorage.setItem('username', namaBaru);
  tampilNama.textContent = `Nama Anda: ${namaBaru}`;
  status.textContent = 'Nama pengguna telah diperbarui.';
  namaInput.value = '';
});

// Hapus nama dari localStorage saat tombol "Hapus" diklik
const hapusButton = document.createElement('button');
hapusButton.textContent = 'Hapus';
form.appendChild(hapusButton);

hapusButton.addEventListener('click', () => {
  localStorage.removeItem('username');
  tampilNama.textContent = 'Nama Anda telah dihapus.';
  status.textContent = 'Nama pengguna saat ini tidak tersedia.';
});
