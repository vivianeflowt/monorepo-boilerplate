import { entries, indexOf, isUndefined, map, pipe, reduce } from 'lodash/fp';

/**
 *  Rename object keys
 * @category Object
 * @template T extends Object
 * @param {...string[]} from
 * @returns {(...to: string[]) => (obj: T) => Object}
 */
export function renameKeys<T extends Object>(
  ...from: string[]
): (...to: string[]) => (obj: T) => object {
  return (...to: string[]) =>
    (obj: T): Object =>
      pipe(
        entries,
        map(([key, value]) => [
          indexOf(key)(from) >= 0 && !isUndefined(to[indexOf(key)(from)])
            ? to[indexOf(key)(from)]
            : key,
          value,
        ]),
        reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}),
      )({ ...obj });
}

export default renameKeys;
