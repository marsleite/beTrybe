
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

//Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
  return names.reduce((acc, curr) => acc + curr.split('').reduce((acc2, curr2) => curr2 === 'a' || curr2 === 'A' ? acc2 += 1 : acc2, 0), 0)

}
console.log(containsA())
assert.deepStrictEqual(containsA(), 20);