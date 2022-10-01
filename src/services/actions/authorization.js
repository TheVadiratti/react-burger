import {
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_ERROR,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  baseUrl
} from '../../utils/constants';
import { checkResponse } from '../../utils/utils';

function changePasswordAction(result, message) {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    success: result,
    message: message
  }
}

function changePasswordFetchAction(email) {
  return function (dispatch) {
    dispatch({
      type: CHANGE_PASSWORD_REQUEST
    })
    fetch(`${baseUrl}/api/password-reset/`, {
      method: 'POST',
      body: {
        "email": email
      }
    })
      .then(checkResponse)
      .then(res => {
        dispatch(changePasswordAction(res.success, res.message))
      })
      .catch(error => {
        dispatch({
          type: CHANGE_PASSWORD_ERROR
        })
        console.log(error);
      })
  }
}

function resetPasswordAction(result, message) {
  return {
    type: RESET_PASSWORD_SUCCESS,
    success: result,
    message: message
  }
}

function resetPasswordFetchAction(password, token) {
  return function (dispatch) {
    dispatch({
      type: RESET_PASSWORD_REQUEST
    })
    fetch(`${baseUrl}/api/password-reset/reset/`, {
      method: 'POST',
      body: {
        "password": password,
        "token": token
      }
    })
      .then(checkResponse)
      .then(res => {
        dispatch(resetPasswordAction(res.success, res.message))
      })
      .catch(error => {
        dispatch({
          type: RESET_PASSWORD_ERROR
        })
        console.log(error);
      })
  }
}

export {
  changePasswordFetchAction,
  resetPasswordFetchAction
};