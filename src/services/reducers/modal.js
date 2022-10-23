import {
  CLOSE_MODAL,
  OPEN_INGREDIENT_DETAILS,
  OPEN_ORDER_DETAILS,
  OPEN_ORDER_INFO
} from '../../utils/constants';

const modalState = {
  open: false,
  type: '',
  byClick: false
}

const modal = (state = modalState, action) => {
  switch (action.type) {
    case OPEN_INGREDIENT_DETAILS:
      return {
        open: true,
        type: 'IngredientDetails',
        byClick: action.byClick
      }

    case OPEN_ORDER_DETAILS:
      return {
        open: true,
        type: 'OrderDetails',
        byClick: action.byClick
      }
    
    case OPEN_ORDER_INFO:
      return {
        open: true,
        type: 'OrderInfo',
        byClick: action.byClick
      }

    case CLOSE_MODAL:
      return modalState

    default:
      return state;
  }
}

export { modal };