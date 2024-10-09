function fetchStep1() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Step 1 Complete');
      }, 1000);
    });
  }
  
  function fetchStep2() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Step 2 Complete');
      }, 2000);
    });
  }
  
  function fetchStep3() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Step 3 Complete');
      }, 3000);
    });
  }
  
  Promise.all([fetchStep1(), fetchStep2(), fetchStep3()])
    .then(results => {
      console.log(results); // Output: ['Step 1 Complete', 'Step 2 Complete', 'Step 3 Complete']
    })
    .catch(error => {
      console.error('Terjadi kesalahan:', error);
    });