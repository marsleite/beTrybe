const { expect, test } = require("@jest/globals");

const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

const divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;

test('quando o número aleatório é par, a função retorna `true`', () => {
  retornaNumeroAleatorio = jest.fn().mockReturnValue(8)
  expect(divisivelPorDois()).toBe(true); // Como garantimos que o número retornado será par?
});

