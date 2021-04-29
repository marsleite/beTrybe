function callBackNumber () {
    let valores = [2, 4, 6, 7, 10, 0, -3];
    let menor = valores[0]
    for (let i in valores) {
      if (valores[i] < menor) {
        menor = valores[i]
      }
    }
    return valores.indexOf(menor);
  }
  console.log(callBackNumber())