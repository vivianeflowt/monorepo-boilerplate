import autoSort from '../src/auto-sort';

test('autoSort', () => {
  expect(autoSort([2, 5, 1, 4, 3])).toEqual(
    expect.arrayContaining([1, 2, 3, 4, 5]),
  );
  expect(autoSort(['C', 'D', 'A', 'B'])).toEqual(
    expect.arrayContaining(['A', 'B', 'C', 'D']),
  );
});
