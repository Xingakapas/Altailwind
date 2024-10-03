// calculations.js
function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      return "Tidak dapat membagi dengan nol";
    }
    return a / b;
  }
  
  export { multiply as kali, divide as bagi };u 