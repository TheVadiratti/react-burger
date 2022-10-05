import {
  baseUrl,
  GET_USER_DATA_REQUEST,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROR,
  SET_USER_DATA
} from '../../utils/constants';
import { checkResponse } from '../../utils/utils';
import { updateTokenFetchAction } from './account';

function setUserDataAction(email, name) {
  return {
    type: SET_USER_DATA,
    email: email,
    name: name
  }
}

function getUserDataFetchAction() {
  return function (dispatch) {
    dispatch({
      type: GET_USER_DATA_REQUEST
    })
    fetch(`${baseUrl}/api/auth/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + localStorage.getItem('accessToken')
      }
    })
      .then(checkResponse)
      .then(res => {
        console.log(res);
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
        if(error === 'Ошибка: 403') {
          console.log('Токен обновился');
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

export {
  getUserDataFetchAction,
  setUserDataAction
};