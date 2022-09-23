import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
  SEND_ORDER_REQUEST,
  SEND_ORDER_SUCCESS,
  SEND_ORDER_ERROR,
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
    type: GET_INGREDIENTS_SUCCESS,
    data: data
  }
}

function setIngredientsListAction() {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST
    })
    fetch(`${baseUrl}/api/ingredients/`)
      .then(checkResponse)
      .then(res => {
        dispatch(getDataAction(res.data))
      })
      .catch(error => {
        dispatch({
          type: GET_INGREDIENTS_ERROR
        })
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

function openOrderDetailsAction() {
  return {
    type: OPEN_ORDER_DETAILS
  }
}

function sendOrderAction(list) {
  return function (dispatch) {
    dispatch({
      type: SEND_ORDER_REQUEST
    })
    fetch(`${baseUrl}/api/orders/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "ingredients": list
      })
    })
      .then(checkResponse)
      .then(res => {
        dispatch({
          type: SEND_ORDER_SUCCESS,
          data: res.order.number
        })
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: SEND_ORDER_ERROR
        })
      })
  }
}

function closeModalAction() {
  return {
    type: CLOSE_MODAL
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
  openOrderDetailsAction,
  closeModalAction,
  sendOrderAction,
  addIngredientAction,
  deleteIngredientAction,
  updateCounterAction,
  sortIngredientsAction
};