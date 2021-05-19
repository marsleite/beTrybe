const { test, expect } = require('@jest/globals');
const myFizzBuzz = require('./exercicio04');

describe('myFizzBuzz', () => {
  test('Faça uma chamada com um número divisível por 3 e 5 ', () => {
    expect(myFizzBuzz(15)).toStrictEqual('fizzbuzz');
  })

  test('Faça uma chamada com um número divisível por 3', () => {
    expect(myFizzBuzz(12)).toStrictEqual('fizz');
  })

  test('Faça uma chamada com um número divisível por 5', () => {
    expect(myFizzBuzz(10)).toStrictEqual('buzz');
  })

  test('Faça uma chamada com um número que não é divisível por 3 ou 5', () => {
    expect(myFizzBuzz(11)).toStrictEqual(11);
  })

  test('Faça uma chamada com um parâmetro que não é um número', () => {
    expect(myFizzBuzz('5')).toStrictEqual(false);
  })
});