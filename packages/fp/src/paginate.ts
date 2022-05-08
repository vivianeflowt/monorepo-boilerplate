import { multiply, pipe, slice } from 'lodash/fp';

import { List } from './types';

/**
 * Returns a paginated part of a listing
 * @category List
 * @template T
 * @param {number} size
 * @returns {(offset: number) => (list: any) => any}
 */
export function paginate<T>(
  size: number,
): (offset: number) => (list: List<T>) => T[] {
  return (offset: number) => (list: List<T>) =>
    pipe(slice(multiply(size)(offset - 1), multiply(offset)(size)))([...list]);
}

export default paginate;
