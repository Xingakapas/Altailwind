function delayedMessage(message, delay) {
    setTimeout(() => {
      console.log(message);
    }, delay);
  }
  
  // Memanggil fungsi dengan pesan dan delay
  delayedMessage("Hello after delay", 2000);