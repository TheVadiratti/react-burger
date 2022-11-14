import {
  BASE_URL,
  GET_USER_DATA_REQUEST,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROR,
  SET_USER_DATA,
  UPDATE_USER_DATA_REQUEST,
  UPDATE_USER_DATA_SUCCESS,
  UPDATE_USER_DATA_ERROR
} from "../../utils/constants";
import { checkResponse } from "../../utils/utils";
import { updateTokenFetchAction } from "./account";
import { AppDispatch } from "../types/index";
import { IchangedUserData } from "../types/user";

function setUserDataAction(email: string, name: string) {
  return {
    type: SET_USER_DATA,
    email: email,
    name: name
  }
}

function getUserDataFetchAction() {
  return function (dispatch: any) {
    dispatch({
      type: GET_USER_DATA_REQUEST
    })
    fetch(`${BASE_URL}/api/auth/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + localStorage.getItem('accessToken')
      }
    })
      .then(checkResponse)
      .then(res => {
        if (res.success) {
          dispatch({
            type: GET_USER_DATA_SUCCESS
          });
          dispatch(setUserDataAction(res.user.email, res.user.name));
        }
        else {
          dispatch({
            type: GET_USER_DATA_ERROR
          })
        }

      })
      .catch(error => {
        if (error === 'Ошибка: 403') {
          console.log('Token updating');
          dispatch(updateTokenFetchAction());
        }
        else {
          dispatch({
            type: GET_USER_DATA_ERROR
          })
          console.log(error);
        }
      })
  }
}

function updateUserDataFetchAction(changedData: IchangedUserData) {
  return function (dispatch: any) {
    dispatch({
      type: UPDATE_USER_DATA_REQUEST
    })
    fetch(`${BASE_URL}/api/auth/user`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + localStorage.getItem('accessToken')
      },
      body: JSON.stringify(changedData)
    })
      .then(checkResponse)
      .then(res => {
        console.log(res);
        if (res.success) {
          dispatch({
            type: UPDATE_USER_DATA_SUCCESS
          });
          dispatch(setUserDataAction(res.user.email, res.user.name));
        }
        else {
          dispatch({
            type: UPDATE_USER_DATA_ERROR
          })
        }

      })
      .catch(error => {
        if (error === 'Ошибка: 403') {
          console.log('Token updating');
          dispatch(updateTokenFetchAction());
        }
        else {
          dispatch({
            type: UPDATE_USER_DATA_ERROR
          })
          console.log(error);
        }
      })
  }
}

export {
  getUserDataFetchAction,
  setUserDataAction,
  updateUserDataFetchAction
};