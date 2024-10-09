function checkNumber(index) {
    const numbers = [3, 7, 1, 6];
    return new Promise((resolve, reject) => {
      const selectedNumber = numbers[index];
      if (selectedNumber > 5) {
        resolve(selectedNumber);
      } else {
        reject(`Number too low: ${selectedNumber}`);
      }
    });
  }
  
  checkNumber(1)
    .then(result => {
      console.log(`Angka yang dipilih: ${result}`);
    })
    .catch(error => {
      console.error(error);
    });