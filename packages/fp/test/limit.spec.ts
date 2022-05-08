import limit from '../src/limit';

const array = [1, 2, 3, 4, 5, 6, 7, 8];

test('limit', () => {
  expect(limit(4)(array)).toEqual(expect.arrayContaining([1, 2, 3, 4]));
});
