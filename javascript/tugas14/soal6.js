async function checkPostAvailability() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
  
      if (data.userId > 5) {
        console.log("Post is available for user IDs greater than 5");
      } else {
        console.log("Post is not available for user IDs greater than 5");
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil data:", error);
    }
  }
  
  checkPostAvailability();