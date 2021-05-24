const { sum } = require('../src/sum');

describe('testando a função que soma dois números', () => {
  it('somando dois números', () => {
    expect(sum(10, 15)).toEqual(25);
  });
})