function character(number) {
    const char = "12345"; 
    const base = char.length;

    number -= 1; 
    if (number < 0) return "1"; 
  
    let result = "";
    while (number >= base) {
      result = char[number % base] + result;
      number = Math.floor(number / base) - 1; 
    }
    result = char[number] + result;
  
    return result;
  }

 console.log( character(1400))