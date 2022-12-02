import { TOrder } from '../../types';

type TOrdersOfType = {
  total: undefined | number;
  totalToday: undefined | number;
  list: TOrder[];
}

export type TOrdersState = {
  all: TOrdersOfType;
  my: TOrdersOfType;
};