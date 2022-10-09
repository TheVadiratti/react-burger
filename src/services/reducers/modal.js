import {
  CLOSE_MODAL,
  OPEN_INGREDIENT_DETAILS,
  OPEN_ORDER_DETAILS
} from '../../utils/constants';

const modalState = {
  open: false,
  type: '',
}

const modal = (state = modalState, action) => {
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
        type: 'OrderDetails'
      }

    case CLOSE_MODAL:
      return modalState

    default:
      return state;
  }
}

export { modal };