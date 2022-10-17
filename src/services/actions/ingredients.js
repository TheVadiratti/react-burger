import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
  SEND_ORDER_REQUEST,
  SEND_ORDER_SUCCESS,
  SEND_ORDER_ERROR,
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
    fetch(`http${baseUrl}/api/ingredients/`)
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

function sendOrderAction(list) {
  return function (dispatch) {
    dispatch({
      type: SEND_ORDER_REQUEST
    })
    fetch(`http${baseUrl}/api/orders/`, {
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
  sendOrderAction,
  addIngredientAction,
  deleteIngredientAction,
  updateCounterAction,
  sortIngredientsAction
};