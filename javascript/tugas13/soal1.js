function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data fetched!");
      }, 3000); // Tunda selama 3 detik
    });
  }
  
  fetchData()
    .then(data => {
      console.log(data); // Output: Data fetched!
    })
    .catch(error => {
      console.error(error);
    });
    