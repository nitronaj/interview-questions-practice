export type Square = '+' | '0';

export type Board = Square[][];

export type PassableLanes = {
  rows: number[];
  cols: number[];
};
