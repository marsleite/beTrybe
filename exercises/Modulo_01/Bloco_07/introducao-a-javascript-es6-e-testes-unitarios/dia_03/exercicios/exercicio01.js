const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

const expected = sum(4, 5);
const otherExpec = sum(0, 0);
assert.strictEqual(expected, 9, "Quatro mais cinco igual a nove");
assert.strictEqual(otherExpec, 0, "Zero mais zero é igual a zero");