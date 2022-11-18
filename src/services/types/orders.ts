import { Torder } from '../../types';

type TordersOfType = {
  total: undefined | number;
  totalToday: undefined | number;
  list: Torder[];
}

export type TordersState = {
  all: TordersOfType;
  my: TordersOfType;
};