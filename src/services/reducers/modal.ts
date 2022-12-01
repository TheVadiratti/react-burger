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
  pageView: {
    ingredient: true,
    order: true,
    myOrder: true
  }
}

const modal: Reducer<TModalState, TModalActions> = (state = modalState, action) => {
  switch (action.type) {
    case MAKE_MODAL_INGREDIENT:
      return {
        pageView: {
          ...state.pageView,
          ingredient: false
        }
      }

    case MAKE_MODAL_ORDER:
      return {
        pageView: {
          ...state.pageView,
          order: false
        }
      }

    case MAKE_MODAL_MY_ORDER:
      return {
        pageView: {
          ...state.pageView,
          myOrder: false
        }
      }

    default:
      return state;
  }
}

export { modal };