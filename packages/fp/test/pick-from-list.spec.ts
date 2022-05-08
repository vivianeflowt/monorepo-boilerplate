import { pickFromList } from '../src';

describe('pickFromList', () => {
  const array = [1, 2, 3, 4, 5];

  test('should pass', () => {
    const result = pickFromList(array);

    expect(array).toContain(result);
  });
});
