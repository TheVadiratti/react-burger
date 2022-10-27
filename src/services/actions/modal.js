import {
  OPEN_INGREDIENT_DETAILS,
  OPEN_ORDER_DETAILS,
  OPEN_ORDER_INFO,
  OPEN_MY_ORDER_INFO,
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

function openOrderInfoAction() {
  return {
    type: OPEN_ORDER_INFO
  }
}

function openMyOrderInfoAction() {
  return {
    type: OPEN_MY_ORDER_INFO
  }
}

function closeModalAction() {
  return {
    type: CLOSE_MODAL
  }
}

export { openIngredientDetailsAction, openOrderDetailsAction, openOrderInfoAction, openMyOrderInfoAction, closeModalAction };