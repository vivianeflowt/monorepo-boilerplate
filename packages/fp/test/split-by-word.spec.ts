import { splitByWord } from '../src';

const str = 'Aatches even if Received contains Additional Elements';

test('splitByWord', () => {
  expect(splitByWord(str)).toEqual([
    'Aatches',
    'even',
    'if',
    'Received',
    'contains',
    'Additional',
    'Elements',
  ]);
});
