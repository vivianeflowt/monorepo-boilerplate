export type IndexComparator<T> = (a: T, b: T) => number;

export type PredicateComparator<T> = (a: T) => boolean;
export interface PipeFunction<T, R = any> {
  (a: T): T;
  (a: T): R;
}
export type List<T> = readonly T[];

// type List<T> = ReadonlyArray<T>;

// export type Key = string | number | symbol;

// export type Nullable<T> = T | null | undefined;

// export type ArrayOrSingle<T> = T | T[];

// export interface PredicateComparator {
//   <T>(a: T): boolean;
// }

// export interface PipeFunction {
//   <T>(a: T): T;
//   <T, R>(a: T): R;
// }
