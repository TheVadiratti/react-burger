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
  BASE_URL
} from "../../utils/constants";
import { checkResponse } from "../../utils/utils";
import { AppDispatch } from "../types/index";
import { TingredientsActions } from "../types/ingredients";
import { Tingredient } from "../types/ingredients";

function getDataAction(data: object[]): TingredientsActions {
  return {
    type: GET_INGREDIENTS_SUCCESS,
    data: data
  }
}

function addIngredientAction(ingredient: Tingredient): TingredientsActions {
  return {
    type: ADD_INGREDIENT,
    ingredient: ingredient
  }
}

function deleteIngredientAction(id: string, index: number): TingredientsActions {
  return {
    type: DELETE_INGREDIENT,
    id: id,
    index: index
  }
}

function updateCounterAction(id: string): TingredientsActions {
  return {
    type: UPDATE_COUNTER,
    id: id
  }
}

function sortIngredientsAction(fromIndex: number, toIndex: number): TingredientsActions {
  return {
    type: SORT_INGREDIENTS,
    from: fromIndex,
    to: toIndex
  }
}

function setIngredientsListAction() {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST
    })
    fetch(`${BASE_URL}/api/ingredients/`)
      .then(checkResponse)
      .then(res => {
        dispatch(getDataAction(res.data));
        console.log(res.data);
      })
      .catch(error => {
        dispatch({
          type: GET_INGREDIENTS_ERROR
        })
        console.log(error);
      })
  }
}

function sendOrderAction(list: string[]) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: SEND_ORDER_REQUEST
    })
    fetch(`${BASE_URL}/api/orders/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + localStorage.getItem('accessToken')
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

export {
  setIngredientsListAction,
  sendOrderAction,
  addIngredientAction,
  deleteIngredientAction,
  updateCounterAction,
  sortIngredientsAction
};