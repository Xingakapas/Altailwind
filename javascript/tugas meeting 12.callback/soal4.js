function performTasks() {
    console.log("Tugas 1");
  
    setTimeout(() => {
      console.log("Tugas 2");
  
      setTimeout(() => {
        console.log("Tugas 3");
      }, 1000);
    }, 3000);
  }
  
  performTasks();