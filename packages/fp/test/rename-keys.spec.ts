import { renameKeys } from '../src';

const obj = { id: 2, name: 'Maria' };

test('renameKeys', () => {
  expect(renameKeys('name2', 'id')('test')(obj)).toMatchObject({
    id: 2,
    name: 'Maria',
  });

  expect(renameKeys('name', 'id')('test', 'num')(obj)).toMatchObject({
    num: 2,
    test: 'Maria',
  });
});
