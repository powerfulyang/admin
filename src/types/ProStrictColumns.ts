import type { ProColumns } from '@ant-design/pro-components';

type Cons<H, T> = T extends readonly any[]
  ? ((h: H, ...t: T) => void) extends (...r: infer R) => void
    ? R
    : never
  : never;

type Prev = [
  never,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  ...0[],
];

export type Paths<T, D extends number = 3> = [D] extends [never]
  ? never
  : T extends object
  ? {
      [K in keyof T]-?:
        | [K]
        | (Paths<T[K], Prev[D]> extends infer P ? (P extends [] ? never : Cons<K, P>) : never);
    }[keyof T]
  : [];

export type ProStrictColumns<T, ValueType = 'text'> = Omit<
  ProColumns<T, ValueType>,
  'dataIndex'
> & {
  dataIndex?: Paths<T> | keyof T;
};
