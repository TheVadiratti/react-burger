import { Reducer } from 'redux';
import {
  CLOSE_MODAL,
  OPEN_INGREDIENT_DETAILS,
  OPEN_ORDER_DETAILS,
  OPEN_ORDER_INFO,
  OPEN_MY_ORDER_INFO,
  MAKE_MODAL_INGREDIENT,
  MAKE_MODAL_ORDER,
  MAKE_MODAL_MY_ORDER
} from '../../utils/constants';
import { TModalState, TModalActions } from '../types/modal';

const modalState = {
  open: false,
  type: undefined,
  pageView: {
    ingredient: true,
    order: true,
    myOrder: true
  }
}

const modal: Reducer<TModalState, TModalActions> = (state = modalState, action) => {
  switch (action.type) {
    case OPEN_INGREDIENT_DETAILS:
      return {
        ...state,
        open: true,
        type: 'IngredientDetails',
      }

    case OPEN_ORDER_DETAILS:
      return {
        ...state,
        open: true,
        type: 'OrderDetails',
      }

    case OPEN_ORDER_INFO:
      return {
        ...state,
        open: true,
        type: 'OrderInfo',
      }

    case OPEN_MY_ORDER_INFO:
      return {
        ...state,
        open: true,
        type: 'MyOrderInfo',
      }

    case MAKE_MODAL_INGREDIENT:
      return {
        ...state,
        pageView: {
          ...state.pageView,
          ingredient: false
        }
      }

    case MAKE_MODAL_ORDER:
      return {
        ...state,
        pageView: {
          ...state.pageView,
          order: false
        }
      }

    case MAKE_MODAL_MY_ORDER:
      return {
        ...state,
        pageView: {
          ...state.pageView,
          myOrder: false
        }
      }

    case CLOSE_MODAL:
      return modalState

    default:
      return state;
  }
}

export { modal };