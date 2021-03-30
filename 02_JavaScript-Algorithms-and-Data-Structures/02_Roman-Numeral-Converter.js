function convertToRoman(num) {
    let numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
    let romanSymbols = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    let conversion = '';
  
    let i = 12;
  
    while (num) {
        let divide = ~~(num/numbers[i]);
        num %= numbers[i];
        while (divide) {
            conversion += romanSymbols[i];
            divide -= 1;
        }
  
        i -= 1;
    }
  
    return conversion;
  }
  
  console.log(convertToRoman(36));