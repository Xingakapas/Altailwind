function greet(name, callback) {
    console.log("Hello, " + name + "!");
  
    setTimeout(() => {
      callback();
    }, 1000); // Tunda selama 1 detik
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  // Panggil fungsi greet dengan nama Anda dan callback sayGoodbye
  greet("Andi", sayGoodbye);