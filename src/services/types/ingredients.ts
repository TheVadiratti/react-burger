import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
  SEND_ORDER_REQUEST,
  SEND_ORDER_SUCCESS,
  SEND_ORDER_ERROR,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  UPDATE_COUNTER,
  SORT_INGREDIENTS,
  SET_INITIAL_BUNS
} from '../../utils/constants';
import { TIngredient } from '../../types';

interface IGetDataRequestAction {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

interface IGetDataSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly data: TIngredient[];
}

interface IGetDataErrorAction {
  readonly type: typeof GET_INGREDIENTS_ERROR;
}

interface IAddIngredientAction {
  readonly type: typeof ADD_INGREDIENT;
  readonly ingredient: TIngredient;
}

interface IDeleteIngredientAction {
  readonly type: typeof DELETE_INGREDIENT;
  readonly id: string;
  readonly index: number;
}

interface IUpdateCounterAction {
  readonly type: typeof UPDATE_COUNTER;
  readonly id: string;
}

interface ISortIngredientsAction {
  readonly type: typeof SORT_INGREDIENTS;
  readonly from: number;
  readonly to: number;
}

interface ISendOrderRequestAction {
  readonly type: typeof SEND_ORDER_REQUEST;
}

interface ISendOrderSuccessAction {
  readonly type: typeof SEND_ORDER_SUCCESS;
  readonly data: number;
}

interface ISendOrderErrorAction {
  readonly type: typeof SEND_ORDER_ERROR;
}

interface ISetInitialBunsAction {
  readonly type: typeof SET_INITIAL_BUNS;
  readonly buns: TIngredient;
}

export type TIngredientsActions =
  | IGetDataRequestAction
  | IGetDataSuccessAction
  | IGetDataErrorAction
  | IAddIngredientAction
  | IDeleteIngredientAction
  | IUpdateCounterAction
  | ISortIngredientsAction
  | ISendOrderRequestAction
  | ISendOrderSuccessAction
  | ISendOrderErrorAction
  | ISetInitialBunsAction;

type TCounter = {
  [key: string]: number;
};

export type TConstructorState = {
  buns?: TIngredient;
  main: TIngredient[];
  counter?: TCounter;
};