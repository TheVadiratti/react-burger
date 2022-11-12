import {
  OPEN_INGREDIENT_DETAILS,
  OPEN_ORDER_DETAILS,
  OPEN_ORDER_INFO,
  OPEN_MY_ORDER_INFO,
  CLOSE_MODAL,
  MAKE_MODAL_INGREDIENT,
  MAKE_MODAL_ORDER,
  MAKE_MODAL_MY_ORDER
} from '../../utils/constants';

interface IopenIngredientDetailsAction {
  readonly type: typeof OPEN_INGREDIENT_DETAILS;
}

interface IopenOrderDetailsAction {
  readonly type: typeof OPEN_ORDER_DETAILS;
}

interface IopenOrderInfoAction {
  readonly type: typeof OPEN_ORDER_INFO;
}

interface IopenMyOrderInfoAction {
  readonly type: typeof OPEN_MY_ORDER_INFO;
}

export interface IcloseModalAction {
  readonly type: typeof CLOSE_MODAL;
}

interface ImakeModalIngredientAction {
  readonly type: typeof MAKE_MODAL_INGREDIENT;
}

interface ImakeModalOrderAction {
  readonly type: typeof MAKE_MODAL_ORDER;
}

interface ImakeModalMyOrderAction {
  readonly type: typeof MAKE_MODAL_MY_ORDER;
}

export type TmodalActions =
  | IopenIngredientDetailsAction
  | IopenOrderDetailsAction
  | IopenOrderInfoAction
  | IopenMyOrderInfoAction
  | IcloseModalAction
  | ImakeModalIngredientAction
  | ImakeModalOrderAction
  | ImakeModalMyOrderAction;