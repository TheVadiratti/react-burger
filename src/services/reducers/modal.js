import {
  CLOSE_MODAL,
  OPEN_INGREDIENT_DETAILS,
  OPEN_ORDER_DETAILS,
  OPEN_ORDER_INFO,
  OPEN_MY_ORDER_INFO
} from '../../utils/constants';

const modalState = {
  open: false,
  type: '',
  pageView: {
    ingredient: true,
    order: true,
    myOrder: true
  }
}

const modal = (state = modalState, action) => {
  switch (action.type) {
    case OPEN_INGREDIENT_DETAILS:
      return {
        open: true,
        type: 'IngredientDetails',
        pageView: {
          ...state.pageView,
          ingredient: false
        }
      }

    case OPEN_ORDER_DETAILS:
      return {
        ...state,
        open: true,
        type: 'OrderDetails',
      }

    case OPEN_ORDER_INFO:
      return {
        open: true,
        type: 'OrderInfo',
        pageView: {
          ...state.pageView,
          order: false
        }
      }

    case OPEN_MY_ORDER_INFO:
      return {
        open: true,
        type: 'MyOrderInfo',
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