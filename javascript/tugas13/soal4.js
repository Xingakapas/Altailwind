function simulateTask() {
    const delay = Math.random() * 3000; // Penundaan acak antara 0 hingga 3 detik
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (delay <= 2000) {
          resolve('Task Success');
        } else {
          reject('Task Failed');
        }
      }, delay);
    });
  }
  
  simulateTask()
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      console.log("Task completed");
    });