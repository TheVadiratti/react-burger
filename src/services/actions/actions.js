import { GET_INGREDIENTS, OPEN_INGREDIENT_DETAILS, OPEN_ORDER_DETAILS, CLOSE_MODAL, ADD_INGREDIENT, DELETE_INGREDIENT, UPDATE_COUNTER, baseUrl } from '../../utils/constants';
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

function addIngredient(ingredient) {
  return {
    type: ADD_INGREDIENT,
    ingredient:ingredient
  }
}

function deleteIngredientAction(id, index) {
  return {
    type: DELETE_INGREDIENT,
    id: id,
    index: index
  }
}

function updateCounter(id) {
  return {
    type: UPDATE_COUNTER,
    id: id
  }
}

export {
  setIngredientsListAction,
  openIngredientDetailsAction,
  closeModalAction,
  openOrderDetailsAction,
  addIngredient,
  deleteIngredientAction,
  updateCounter
};