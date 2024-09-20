function calculateTax(price, location) {
    let taxRate;
    if (location === "Jakarta") {
      taxRate = 0.1; // 10%
    } else if (location === "Bandung") {
      taxRate = 0.05; // 5%
    } else {
      console.log("Lokasi tidak valid.");
      return price; // Kembalikan harga awal jika lokasi tidak dikenali
    }
  
    const tax = price * taxRate;
    return price + tax;
  }
  
  function displayResult(finalPrice, paymentStatus) {
    if (paymentStatus === "paid") {
      console.log(`Pembayaran berhasil! Total pembayaran: Rp${finalPrice.toLocaleString('id-ID')}`);
    } else {
      console.log("Pembayaran belum selesai.");
    }a
  }
  
  // Contoh penggunaan:    
  let price = 1000;
  let location = "Jakarta";
  
  let finalPrice = calculateTax(price, location);
  displayResult(finalPrice, "paid");