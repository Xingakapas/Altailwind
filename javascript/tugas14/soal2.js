async function calculateDivision(a, b) {
    try {
      if (b === 0) {
        throw new Error("Pembagi tidak boleh nol");
      }
      const result = a / b;
      console.log(`Hasil pembagian: ${result}`);
    } catch (error) {
      console.error("Terjadi kesalahan:", error.message);
    }
  }
  
  // Contoh penggunaan
  calculateDivision(10, 2);  // Output: Hasil pembagian: 5
  calculateDivision(10, 0);  // Output: Terjadi kesalahan: Pembagi tidak boleh nol