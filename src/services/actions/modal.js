import {
  OPEN_INGREDIENT_DETAILS,
  OPEN_ORDER_DETAILS,
  CLOSE_MODAL
} from '../../utils/constants';

function openIngredientDetailsAction() {
  return {
    type: OPEN_INGREDIENT_DETAILS
  }
}

function openOrderDetailsAction() {
  return {
    type: OPEN_ORDER_DETAILS
  }
}

function closeModalAction() {
  return {
    type: CLOSE_MODAL
  }
}

export { openIngredientDetailsAction, openOrderDetailsAction, closeModalAction };