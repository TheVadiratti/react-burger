import {
  GET_INGREDIENTS,
  OPEN_INGREDIENT_DETAILS,
  OPEN_ORDER_DETAILS,
  CLOSE_MODAL,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  UPDATE_COUNTER,
  SORT_INGREDIENTS,
  baseUrl
} from '../../utils/constants';
import { checkResponse } from '../../utils/utils';

function getDataAction(data) {
  return {
    type: GET_INGREDIENTS,
    data: data
  }
}

function setIngredientsListAction() {
  return function (dispatch) {
    fetch(`${baseUrl}/api/ingredients/`)
      .then(checkResponse)
      .then(res => {
        dispatch(getDataAction(res.data))
      })
      .catch(error => {
        console.log(error);
      })
  }
}

function openIngredientDetailsAction(data) {
  return {
    type: OPEN_INGREDIENT_DETAILS,
    data: data
  }
}

function openOrderDetailsAction(data) {
  return {
    type: OPEN_ORDER_DETAILS,
    data: data
  }
}

function closeModalAction() {
  return {
    type: CLOSE_MODAL,
  }
}

function addIngredientAction(ingredient) {
  return {
    type: ADD_INGREDIENT,
    ingredient: ingredient
  }
}

function deleteIngredientAction(id, index) {
  return {
    type: DELETE_INGREDIENT,
    id: id,
    index: index
  }
}

function updateCounterAction(id) {
  return {
    type: UPDATE_COUNTER,
    id: id
  }
}

function sortIngredientsAction(fromIndex, toIndex) {
  return {
    type: SORT_INGREDIENTS,
    from: fromIndex,
    to: toIndex
  }
}

export {
  setIngredientsListAction,
  openIngredientDetailsAction,
  closeModalAction,
  openOrderDetailsAction,
  addIngredientAction,
  deleteIngredientAction,
  updateCounterAction,
  sortIngredientsAction
};