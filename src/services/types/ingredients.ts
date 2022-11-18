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
import { Tingredient } from '../../types';

interface IgetDataRequestAction {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

interface IgetDataSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly data: Tingredient[];
}

interface IgetDataErrorAction {
  readonly type: typeof GET_INGREDIENTS_ERROR;
}

interface IaddIngredientAction {
  readonly type: typeof ADD_INGREDIENT;
  readonly ingredient: Tingredient;
}

interface IdeleteIngredientAction {
  readonly type: typeof DELETE_INGREDIENT;
  readonly id: string;
  readonly index: number;
}

interface IupdateCounterAction {
  readonly type: typeof UPDATE_COUNTER;
  readonly id: string;
}

interface IsortIngredientsAction {
  readonly type: typeof SORT_INGREDIENTS;
  readonly from: number;
  readonly to: number;
}

interface IsendOrderRequestAction {
  readonly type: typeof SEND_ORDER_REQUEST;
}

interface IsendOrderSuccessAction {
  readonly type: typeof SEND_ORDER_SUCCESS;
  readonly data: string[];
}

interface IsendOrderErrorAction {
  readonly type: typeof SEND_ORDER_ERROR;
}

interface IsetInitialBunsAction {
  readonly type: typeof SET_INITIAL_BUNS;
  readonly buns: Tingredient;
}

export type TingredientsActions =
  | IgetDataRequestAction
  | IgetDataSuccessAction
  | IgetDataErrorAction
  | IaddIngredientAction
  | IdeleteIngredientAction
  | IupdateCounterAction
  | IsortIngredientsAction
  | IsendOrderRequestAction
  | IsendOrderSuccessAction
  | IsendOrderErrorAction
  | IsetInitialBunsAction;

export type TconstructorState = {
  buns: Tingredient | object;
  main: Tingredient[];
  counter: object;
};