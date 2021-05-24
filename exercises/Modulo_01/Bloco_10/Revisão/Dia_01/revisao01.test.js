
const sum = (a, b) => a + b;

test('soma de dois números', () => {
  expect(sum(2, 3)).toEqual(5)
});