function hitungHargaTiket(umur) {
    
    if (umur < 0 || !Number.isInteger(umur)) {
      return "Umur tidak valid. Harap masukkan umur dalam bilangan bulat positif.";
    }
  
    
    if (umur < 2) {
      return "Pengunjung di bawah 2 tahun tidak diperkenankan masuk.";
    } else if (umur <= 5) {
      return "Harga tiket: setengah harga";
    } else {
      return "Harga tiket: penuh";
    }
  }
  
  
  let umurPengunjung = 5;
  let hargaTiket = hitungHargaTiket(umurPengunjung);
  console.log(hargaTiket); 
  
  
  umurPengunjung = 10;
  hargaTiket = hitungHargaTiket(umurPengunjung);
  console.log(hargaTiket); 
  function cekUsiaSIM(usia) {
    if (usia >= 17) {
      return "Anda sudah memenuhi syarat usia untuk membuat SIM.";
    } else {
      return "Anda belum memenuhi syarat usia untuk membuat SIM.";
    }
  }
  

  function cekUsiaSIM() {
    let usia = prompt("Masukkan usia Anda:");
    usia = parseInt(usia); // Mengubah input menjadi angka integer
  
    if (isNaN(usia)) {
      alert("Masukkan usia yang valid (angka).");
    } else {
      if (usia >= 17) {
        alert("Anda sudah memenuhi syarat usia untuk membuat SIM.");
      } else {
        alert("Anda belum memenuhi syarat usia untuk membuat SIM.");
      }
    }
  }
  
  cekUsiaSIM();
  

  function cekBilangan() {
    let angka = prompt("Masukkan sebuah angka:");
    angka = parseInt(angka); // Mengubah input menjadi angka integer
  
    if (isNaN(angka)) {
      alert("Masukkan angka yang valid.");
    } else {
      if (angka > 0) {
        alert("Angka " + angka + " adalah positif.");
      } else if (angka < 0) {
        alert("Angka " + angka + " adalah negatif.");
      } else {
        alert("Angka " + angka + " adalah netral.");
      }
    }
  }
  
  cekBilangan();
  

  function hitungDiskon(totalPembelian) {
    let diskon = 0;
  
    if (totalPembelian >= 200) {
      diskon = totalPembelian * 0.15;
    } else if (totalPembelian >= 100) {
      diskon = totalPembelian * 0.1;
    }
  
    const totalSetelahDiskon = totalPembelian - diskon;
    console.log("Total pembelian setelah diskon: Rp" + totalSetelahDiskon);
  }
  
  // Contoh penggunaan:
  let pembelian1 = 150;
  let pembelian2 = 250;
  let pembelian3 = 80;
  
  hitungDiskon(pembelian1);
  hitungDiskon(pembelian2);
  hitungDiskon(pembelian3);

  console.log(pembelian1);

  function cekUsia() {
    let usiaInput = document.getElementById("usia").value;
    let usia = parseInt(usiaInput); // Mengubah nilai input menjadi angka
  
    validasiUsia(usia);
  }

  function validasiUsia(usia) {
    if (usia >= 18) {
      console.log("Registrasi berhasil");
    } else {
      console.log("Registrasi gagal. Usia harus minimal 18 tahun.");
    }
  }
  
  // Contoh penggunaan:
  let usiaPengguna = 17; // Ganti dengan nilai usia yang ingin Anda cek
  
  validasiUsia(usiaPengguna);
  
  
  
  
  
  