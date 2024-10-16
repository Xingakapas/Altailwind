async function simulateDelay() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Delay finished");
      }, 2000); // 2000 milidetik = 2 detik
    });
  }
  
  async function main() {
    const result = await simulateDelay();
    console.log(result);
  }
  
  main();