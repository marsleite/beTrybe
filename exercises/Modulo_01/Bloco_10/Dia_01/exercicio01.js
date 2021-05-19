const sum = (a, b) => {
 if (typeof a !== 'number' || typeof b !== 'number') {
  throw new Error('os parâmetros precisam ser um número'); 
 }
 return a + b;
}
module.exports = sum;