const { test, expect } = require('@jest/globals');
const myRemove = require('./exercicio02');

describe('myRemove', () => {
  test('retorna o array :', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4])
  })

  test('não retorna o mesmo array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
  })

  test('verifica se array passado não sofreu alterações', () => {
    expect(myRemove([1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
  })

  test('verifica se retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
  })
});