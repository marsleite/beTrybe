function verificaPalindromo (text) {
    let palindrome = text.split('').reverse().join('');
    if (text === palindrome) {
      return true;
    } else {
      return false
    }
  };
  
  console.log(verificaPalindromo('arara'));
  console.log(verificaPalindromo('desenvolvimento'));