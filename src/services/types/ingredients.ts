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
} from "../../utils/constants";

export interface Iingredient {
  readonly type: string;
  readonly calories: number;
  readonly carbohydrates: number;
  readonly fat: number;
  readonly proteins: number;
  readonly image: string;
  readonly image_large: string;
  readonly image_mobile: string;
  readonly name: string;
  readonly price: number;
  readonly __v: 0;
  readonly _id: string;
}

interface IgetDataRequestAction {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

interface IgetDataSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly data: object[];
}

interface IgetDataErrorAction {
  readonly type: typeof GET_INGREDIENTS_ERROR;
}

interface IaddIngredientAction {
  readonly type: typeof ADD_INGREDIENT;
  readonly ingredient: Iingredient;
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
  readonly buns: object;
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