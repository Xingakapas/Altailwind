function printEverySecond() {
    let counter = 0;
    const intervalId = setInterval(() => {
      console.log("Hello, World!");
      counter++;
      if (counter === 5) {
        clearInterval(intervalId);
      }
    }, 1000); // Setiap 1000 milidetik (1 detik)
  }
  
  printEverySecond();