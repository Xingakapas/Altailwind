function task1() {
    console.log('Mulai task 1');
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Selesai task 1');
        resolve('Hasil task 1');
      }, 1000);
    });
  }
  
  function task2() {
    console.log('Mulai task 2');
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Selesai task 2');
        resolve('Hasil task 2');
      }, 2000);
    });
  }
  
  async function performTasks() {
    console.log('Mulai semua task');
    const result1 = await task1();
    const result2 = await task2();
    console.log('Semua task selesai');
    console.log('Hasil task 1:', result1);
    console.log('Hasil task 2:', result2);
  }
  
  performTasks();