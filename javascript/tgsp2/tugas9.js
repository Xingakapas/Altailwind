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
  mobil.setKecepatan(-50);
  console.log("Kecepatan mobil sekarang:", mobil.getKecepatan());
  