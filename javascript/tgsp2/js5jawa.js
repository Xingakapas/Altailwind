let number = 5;

if (number < 0) {
  console.log("Negative");
} else if (number === 0) {
  console.log("Zero");
} else if (number > 0) {
  console.log("Positive");
} else {
  console.log("Unknown");
}

let hari = "Minggu";

switch (hari.toLowerCase()) { // buat huruf kecil semua
  case "sabtu":
  case "minggu":
    console.log("Weekend");
    break;
  default:
    console.log("Weekday");
}

for (let i = 1; i <= 15; i++) { // i sbg var , i ke-2
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

