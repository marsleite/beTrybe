const assert = require('assert');

function division(x, y) {
    return x / y;
}

const expected = division(9, 3);

assert.strictEqual(expected, 3, "nove dividido por três é igual a três")

assert.strictEqual(expected, '3', "nove dividido por três é igual a três")