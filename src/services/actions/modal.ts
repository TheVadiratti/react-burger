import {
  OPEN_INGREDIENT_DETAILS,
  OPEN_ORDER_DETAILS,
  OPEN_ORDER_INFO,
  OPEN_MY_ORDER_INFO,
  CLOSE_MODAL
} from '../../utils/constants';
import { TmodalActions } from '../types/modal';

function openIngredientDetailsAction(): TmodalActions {
  return {
    type: OPEN_INGREDIENT_DETAILS
  }
}

function openOrderDetailsAction(): TmodalActions {
  return {
    type: OPEN_ORDER_DETAILS
  }
}

function openOrderInfoAction(): TmodalActions {
  return {
    type: OPEN_ORDER_INFO
  }
}

function openMyOrderInfoAction(): TmodalActions {
  return {
    type: OPEN_MY_ORDER_INFO
  }
}

function closeModalAction(): TmodalActions {
  return {
    type: CLOSE_MODAL
  }
}

export { openIngredientDetailsAction, openOrderDetailsAction, openOrderInfoAction, openMyOrderInfoAction, closeModalAction };