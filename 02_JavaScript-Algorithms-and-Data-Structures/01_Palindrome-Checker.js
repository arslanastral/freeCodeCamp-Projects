function palindrome(str) {
    return str.replace(/[()_" ",.-]/g, "").split('').reverse().join('').toLowerCase() === str.replace(/[()_" ",.-]/g, "").toLowerCase();
  }
  
  
  console.log(palindrome("eye"));