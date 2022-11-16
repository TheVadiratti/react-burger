type Torder = {
  createdAt: string;
  ingredients: string[];
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  _id: string;
}

type TordersOfType = {
  total: undefined | number;
  totalToday: undefined | number;
  list: Torder[];
}

export type TordersState = {
  all: TordersOfType;
  my: TordersOfType;
};