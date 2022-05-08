import { paginate } from '../src';

test('paginate', () => {
  expect(paginate(2)(2)([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual(
    expect.arrayContaining([3, 4]),
  );
});
