const { test, expect } = require('@jest/globals');
const myRemoveWithoutCopy = require('./exercicio03');

describe('myRemoveWithoutCopy', () => {
  test('retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4])
  });

  test('não retorna o array original', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
  });

  test('verifica se houve alteração no array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4])
  })
})