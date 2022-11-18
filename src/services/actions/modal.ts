import {
  OPEN_INGREDIENT_DETAILS,
  OPEN_ORDER_DETAILS,
  OPEN_ORDER_INFO,
  OPEN_MY_ORDER_INFO,
  CLOSE_MODAL
} from '../../utils/constants';
import { TModalActions } from '../types/modal';

function openIngredientDetailsAction(): TModalActions {
  return {
    type: OPEN_INGREDIENT_DETAILS
  }
}

function openOrderDetailsAction(): TModalActions {
  return {
    type: OPEN_ORDER_DETAILS
  }
}

function openOrderInfoAction(): TModalActions {
  return {
    type: OPEN_ORDER_INFO
  }
}

function openMyOrderInfoAction(): TModalActions {
  return {
    type: OPEN_MY_ORDER_INFO
  }
}

function closeModalAction(): TModalActions {
  return {
    type: CLOSE_MODAL
  }
}

export { openIngredientDetailsAction, openOrderDetailsAction, openOrderInfoAction, openMyOrderInfoAction, closeModalAction };