const longestWord = text => {
    let phrase = text.split(' ');
    let maxLength = 0;
    let res = '';
    for (const i of phrase) {
      if (i.length > maxLength) {
        maxLength = i.length;
        res = i
      }
    }
    return res;
  }
  
  console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
  