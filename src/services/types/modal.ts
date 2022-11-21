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

type TModalType = 'IngredientDetails' | 'OrderDetails' | 'OrderInfo' | 'MyOrderInfo';

export type TModalState = {
  open: boolean;
  type?: TModalType;
  pageView: {
    ingredient: boolean;
    order: boolean;
    myOrder: boolean;
  };
};

interface IOpenIngredientDetailsAction {
  readonly type: typeof OPEN_INGREDIENT_DETAILS;
}

interface IOpenOrderDetailsAction {
  readonly type: typeof OPEN_ORDER_DETAILS;
}

interface IOpenOrderInfoAction {
  readonly type: typeof OPEN_ORDER_INFO;
}

interface IOpenMyOrderInfoAction {
  readonly type: typeof OPEN_MY_ORDER_INFO;
}

export interface ICloseModalAction {
  readonly type: typeof CLOSE_MODAL;
}

interface IMakeModalIngredientAction {
  readonly type: typeof MAKE_MODAL_INGREDIENT;
}

interface IMakeModalOrderAction {
  readonly type: typeof MAKE_MODAL_ORDER;
}

interface IMakeModalMyOrderAction {
  readonly type: typeof MAKE_MODAL_MY_ORDER;
}

export type TModalActions =
  | IOpenIngredientDetailsAction
  | IOpenOrderDetailsAction
  | IOpenOrderInfoAction
  | IOpenMyOrderInfoAction
  | ICloseModalAction
  | IMakeModalIngredientAction
  | IMakeModalOrderAction
  | IMakeModalMyOrderAction;