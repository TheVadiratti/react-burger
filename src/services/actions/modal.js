import {
  OPEN_INGREDIENT_DETAILS,
  OPEN_ORDER_DETAILS,
  CLOSE_MODAL
} from '../../utils/constants';

function openIngredientDetailsAction(byClick) {
  return {
    type: OPEN_INGREDIENT_DETAILS,
    byClick: byClick
  }
}

function openOrderDetailsAction(byClick) {
  return {
    type: OPEN_ORDER_DETAILS,
    byClick: byClick
  }
}

function closeModalAction() {
  return {
    type: CLOSE_MODAL
  }
}

export { openIngredientDetailsAction, openOrderDetailsAction, closeModalAction };