const { test, expect } = require('@jest/globals');
const myRemove = require('./exercicio02');

describe('myRemove', () => {
  test('retorna o array :', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4])
  })  
});