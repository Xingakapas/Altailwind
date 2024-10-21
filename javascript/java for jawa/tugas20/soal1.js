// Ambil elemen form
const form = document.getElementById('myForm');

// Tambahkan event listener untuk event submit
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Mencegah pengiriman form default

    // Ambil nilai dari input
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;

    // Tampilkan pesan alert
    alert(`Nama: ${nama}\nEmail: ${email}`);

    // Di sini, Anda bisa menambahkan logika untuk memproses data lebih lanjut,
    // misalnya mengirim data ke server menggunakan AJAX
});