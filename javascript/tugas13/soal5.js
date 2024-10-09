function fetchDataA() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Data A');
      }, 1000);
    });
  }
  
  function fetchDataB() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Data B');
      }, 2000);
    });
  }
  
  Promise.all([fetchDataA(), fetchDataB()])
    .then(results => {
      const combinedData = results.join(' '); // Menggabungkan data menjadi string dengan spasi
      console.log(combinedData); // Output: Data A Data B
    })
    .catch(error => {
      console.error('Terjadi kesalahan:', error);
    });