function callBackNumber () {
    let valores = [2, 3, 6, 7, 10, 1];
    let maior = valores[0]
    for (let i in valores) {
      if (valores[i] > maior) {
        maior = valores[i]
      }
    }
    return valores.indexOf(maior);
  }
  console.log(callBackNumber())