import { eq, every, map, pipe } from 'lodash/fp';

import { PipeFunction, PredicateComparator } from './types';

/**
 * If all comparators against the predicate are true execute the function A
 * otherwise return the predicate without modification
 * @category Comparability
 * @template T
 * @template R
 * @param {...PredicateComparator<T>[]} args
 * @returns {(a: PipeFunction<T>) => (predicade: T) => T}
 */
export function ifThen<T>(
  ...args: Array<PredicateComparator<T>>
): (a: PipeFunction<T>) => (predicade: T) => T {
  return (a: PipeFunction<T>) =>
    (predicade: T): T => {
      return pipe(
        map((cond: PredicateComparator<T>) => cond(predicade)),
        every(eq(true)),
      )(args)
        ? a(predicade)
        : predicade;
    };
}

export default ifThen;
