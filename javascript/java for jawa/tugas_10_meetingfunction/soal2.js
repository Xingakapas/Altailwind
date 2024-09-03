function calculatePrice(quantity, pricePerItem, isMember) {
    let total = quantity * pricePerItem;
    if (isMember) {
      let discount = total * 0.15;
      total -= discount;
    }
    return total;
  }
  
  function confirmPurchase(isConfirmed, totalPrice) {
    if (isConfirmed) {
      console.log(`Pembelian dikonfirmasi dengan total harga: Rp${totalPrice.toLocaleString('id-ID')}`);
    } else {
      console.log("Pembelian dibatalkan.");
    }
  }
  
  // Input dari pengguna
  let quantity = parseInt(prompt("Masukkan jumlah barang:"));
  let pricePerItem = parseFloat(prompt("Masukkan harga per barang:"));
  let isMember = confirm("Apakah Anda anggota? (OK = ya, Cancel = tidak)");
  
  // Hitung total harga
  let totalPrice = calculatePrice(quantity, pricePerItem, isMember);
  
  // Konfirmasi pembelian
  let isConfirmed = confirm(`Total harga adalah Rp${totalPrice.toLocaleString('id-ID')}. Apakah Anda ingin melanjutkan?`);
  confirmPurchase(isConfirmed, totalPrice);