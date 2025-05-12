
const sum = require('../app/sum');

test('sum of 1 and 2 is 3', () => {
  expect(sum(1, 2)).toBe(3);
});
