class Kendaraan {
    #kecepatan; // Variabel privat untuk menyimpan kecepatan
  
    constructor() {
      this.#kecepatan = 0;
    }
  
    getKecepatan() {
      return this.#kecepatan;
    }
  
    setKecepatan(value) {
      if (value >= 0) {
        this.#kecepatan = value;
      } else {
        console.log("Kecepatan tidak boleh negatif.");
      }
    }
  }
  
  // Membuat objek Kendaraan
  let mobil = new Kendaraan();
  
  // Mengatur kecepatan menjadi 100
  mobil.setKecepatan(100);
  console.log("Kecepatan mobil sekarang:", mobil.getKecepatan());
  
  // Mencoba mengatur kecepatan menjadi -50
  mobil.setKecepatan(-50) ;
  console.log("Kecepatan mobil sekarang:", mobil.getKecepatan());
  
  class Karyawan {
    constructor(nama, gaji, jabatan) {
      this.nama = nama;
      this.gaji = gaji;
      this.jabatan = jabatan;
    }//this unutk merujuk objek saat ini,kontruktor untuk nganalisis
  
    getNama() {//getter dan seeter digunakan untuk mengakses dan mengubah 
      return this.nama;
    }
  
    setNama(nama) {
      this.nama = nama;


    } 
  x
    getGaji() {
      return this.gaji;
    }
  
    setGaji(gaji) {
      this.gaji = gaji;
    }
  
    getJabatan() {
      return this.jabatan;
    }
  
    setJabatan(jabatan) {
      this.jabatan = jabatan;
    }
  }
  
  class Manajer extends Karyawan {//mewarisi sifat karywawan
    constructor(nama, gaji, jabatan) {
      super(nama, gaji, jabatan);
    }
  
    beriTunjangan(tunjangan) {//tamabahan khusus untuk keals manajer
      this.gaji += tunjangan;
    }
  }
  
  // Membuat objek Manajer
  const manajer = new Manajer('Budi', 10000000, 'Manajer');
  console.log('Nama:', manajer.getNama());
  console.log('Gaji awal:', manajer.getGaji());
  
  manajer.beriTunjangan(2000000);
  console.log('Gaji setelah tunjangan:', manajer.getGaji());

  class Karyawan {
    constructor(nama, gaji) {//menaganalisi 2 properti
        this._nama = nama;
        this._gaji = gaji;//underscore dimaksud untuk bersifat private
    }

    get nama() {
        return this._nama;
    }

    set nama(nama) {
        this._nama = nama;
    }

    get gaji() {
        return this._gaji;
    }

    set gaji(gaji) {
        this._gaji = gaji;
    }   

class Manajer extends Karyawan {
    constructor(nama, gaji) {
        super(nama, gaji);
    }

    buatLaporan() {
        // Implementasi pembuatan laporan (abstraksi)
        console.log('Laporan untuk', this.nama, 'sedang dibuat...');
        // ... (logika pembuatan laporan yang sebenarnya)
    }
}

// Membuat instance Manajer
const manajer1 = new Manajer('Budi', 10000000);

// Mengakses dan memodifikasi data
console.log('Nama Manajer:', manajer1.nama);
manajer1.nama = 'Andi';
console.log('Nama Manajer setelah diubah:', manajer1.nama);

manajer1.buatLaporan();

class AkunBank {
    constructor(saldoAwal) {
      this._saldo = saldoAwal;
    }

    /**
     * Mendapatkan nilai saldo akun bank.
     * @returns {number} Nilai saldo akun bank.
     */
    get saldo() {
      return this._saldo;
    }

  

    /**
     * Menambahkan atau mengurangi saldo dengan jumlah yang diberikan.
     * Jika jumlah negatif, maka akan dicetak pesan error.
     * @param {number} jumlah Jumlah yang ingin ditambahkan ke saldo.
     * @throws {Error} Jika jumlah negatif.
     */
    setSaldo(jumlah) {
      if (jumlah >= 0) {
        this._saldo += jumlah;
      } else {
        console.error("Saldo tidak boleh negatif");
      }
    }

  // Getter adalah metode yang digunakan untuk mengambil nilai properti dari sebuah objek. 
  //Getter biasanya memiliki nama yang sama dengan properti yang ingin diakses, tetapi dengan awalan "get"
  // Setter adalah metode yang digunakan untuk mengubah nilai properti dari sebuah objek.
  // Setter biasanya memiliki nama yang sama dengan properti yang ingin diubah, tetapi dengan awalan "set"
    tarikTunai(jumlah) {
      if (jumlah > 0 && jumlah <= this._saldo) {
        this._saldo -= jumlah;
      } else {
        console.error("Saldo tidak mencukupi atau jumlah penarikan tidak valid");
      }
    }
  }
  
  // Membuat objek akun bank
  const akun = new AkunBank(1000000);
  
  // Menampilkan saldo awal
  console.log("Saldo awal:", akun.saldo);
  
  // Menambahkan saldo
  akun.setSaldo(500000);
  console.log("Saldo setelah ditambahkan:", akun.saldo);
  
  // Mencoba mengurangi saldo (tidak boleh)
  akun.setSaldo(-200000); // Ini akan mencetak pesan error  
  
  // Menarik tunai
  akun.tarikTunai(300000);
  console.log("Saldo setelah ditarik:", akun.saldo); 
  
  for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }   
  