import { eq, every, map, pipe } from 'lodash/fp';

import { PipeFunction, PredicateComparator } from './types';

/**
 * If all comparators against the predicate are true execute function A
 * otherwise function B
 * @category Comparability
 * @template T
 * @param {...PredicateComparator<T>[]} args
 * @returns {(a: PipeFunction<T>) => (b: PipeFunction<T>) => (predicade: T) => T}
 */
export function ifElse<T>(
  ...args: Array<PredicateComparator<T>>
): (a: PipeFunction<T>) => (b: PipeFunction<T>) => (predicade: T) => T {
  return (a: PipeFunction<T>) =>
    (b: PipeFunction<T>) =>
    (predicade: T): T => {
      return pipe(
        map((cond: PredicateComparator<T>) => cond(predicade)),
        every(eq(true)),
      )(args)
        ? a(predicade)
        : b(predicade);
    };
}

export default ifElse;
