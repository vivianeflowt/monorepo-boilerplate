import { slice } from 'lodash/fp';

import { List } from './types';

/**
 * Limit the size of an array
 * @category Array
 * @template T
 * @param {number} count
 * @returns {(list: any) => any}
 */
export function limit<T>(count: number): (list: List<T>) => T[] {
  return (list: List<T>) => slice(0)(Math.abs(count))([...list]);
}

export default limit;
