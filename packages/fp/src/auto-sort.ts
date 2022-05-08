import f from 'lodash/fp';

import { List } from './types';

/**
 * Sort an array of numbers or string ascending
 * @category Array
 * @template T extends string | number
 * @param {List<T>} list
 * @returns {*}
 */
export function autoSort<T extends string | number>(list: List<T>): T[] {
  return [...list].sort((a, b) =>
    f.isNumber(a) && f.isNumber(b)
      ? a - b
      : (a as string).localeCompare(a as string),
  );
}

export default autoSort;
