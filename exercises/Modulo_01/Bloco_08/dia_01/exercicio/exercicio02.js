const sorteio = (number, callback) => {
  let sorteioNumb = Math.ceil(Math.random() * 5);
  return callback(number, sorteioNumb);
}

const checkNumber = (n, s) => {
  if(n === s) {
    return `Parabéns você ganhou!`
  }
  return `Tente novamente`
}

console.log(sorteio(3, checkNumber));