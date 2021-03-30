function rot13(str) {
  
    let alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let splits = str.split('');
  
    for (let i = 0; i < str.length; i++) {
      if (/\W/.test(splits[i])) continue;
  
      if (alphabets.indexOf(str[i]) + 13 >= 26) {
        splits[i] = alphabets[(alphabets.indexOf(str[i]) + 13) - 26]
      } else {
        splits[i] = alphabets[alphabets.indexOf(str[i]) + 13]
      }
      
    }
    
    return splits.join('');
  }
  
  console.log(rot13("SERR PBQR PNZC"));