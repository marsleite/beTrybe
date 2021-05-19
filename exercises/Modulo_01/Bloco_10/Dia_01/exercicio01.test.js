const { test, expect } = require('@jest/globals');
const sum = require('.');

describe('sum', () => {
  test('4 plus 5 equals 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('throws an error when a string is passed', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });

  test('0 mais 0 é igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
  })
});