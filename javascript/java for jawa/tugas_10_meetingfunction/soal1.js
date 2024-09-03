function registerUser(name, userType) {
    if (userType === "VIP") {
      return `Welcome VIP, ${name}!`;
    } else {
      return `Welcome, ${name}!`;
    }
  }
  
  // Panggil fungsi registerUser
  let result = registerUser("Nina", "VIP");
  console.log(result); // Output: Welcome VIP, Nina!
  
  function applyDiscount(userType, purchaseAmount) {
    let discount;
    if (userType === "VIP") {
      discount = 0.2;
    } else {
      discount = 0.1;
    }
  
    let totalDiscount = purchaseAmount * discount;
    let totalPayment = purchaseAmount - totalDiscount;
    return totalPayment;
  }
  
  // Panggil fungsi applyDiscount
  result = applyDiscount("VIP", 200);
  console.log(result); // Output: 160
  
  result = applyDiscount("NON VIP", 100);
  console.log(result); // Output: 90
  