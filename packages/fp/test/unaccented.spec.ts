import { unaccented } from '../src';

test('unaccented', () => {
  expect(unaccented('Ábôà')).toEqual('Aboa');
});
