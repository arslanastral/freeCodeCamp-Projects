function telephoneCheck(str) {
  

    if (str.replace(/[^\()]/g, "").length === 1) {
      return false;
    } else {
      return /^1?[ ]?\(?\d{3}\)?[- ]?\d{3}[ -]?\d{4}$/.test(str);
    }
  }
  
  telephoneCheck("555-555-5555");