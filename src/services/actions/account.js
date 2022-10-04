import {
  baseUrl,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_ERROR,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  AUTHORIZATION_REQUEST,
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_ERROR,
  SET_USER_DATA
} from '../../utils/constants';
import { checkResponse } from '../../utils/utils';

function changePasswordAction(result, message) {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    success: result,
    message: message
  }
}

function resetPasswordAction(result, message) {
  return {
    type: RESET_PASSWORD_SUCCESS,
    success: result,
    message: message
  }
}

function registrationAction(result) {
  return {
    type: REGISTRATION_SUCCESS,
    result: result
  }
}

function setUserDataAction(email, name) {
  return {
    type: SET_USER_DATA,
    email: email,
    name: name
  }
}

function authorizationAction(result) {
  return {
    type: AUTHORIZATION_SUCCESS,
    result: result
  }
}

// API

function changePasswordFetchAction(email) {
  return function (dispatch) {
    dispatch({
      type: CHANGE_PASSWORD_REQUEST
    })
    fetch(`${baseUrl}/api/password-reset/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email
      })
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

function resetPasswordFetchAction(password, token) {
  return function (dispatch) {
    dispatch({
      type: RESET_PASSWORD_REQUEST
    })
    fetch(`${baseUrl}/api/password-reset/reset/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "password": password,
        "token": token
      })
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

function registationFetchAction(email, password, name) {
  return function (dispatch) {
    dispatch({
      type: REGISTRATION_REQUEST
    })
    fetch(`${baseUrl}/api/auth/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
        "password": password,
        "name": name
      })
    })
      .then(checkResponse)
      .then(res => {
        dispatch(registrationAction(res.success));
        dispatch(setUserDataAction(res.user.email, res.user.name));
        localStorage.setItem('refreshToken', res.refreshToken);
      })
      .catch(error => {
        dispatch({
          type: REGISTRATION_ERROR
        })
        console.log(error);
      })
  }
}

function authorizationFetchAction(email, password) {
  return function (dispatch) {
    dispatch({
      type: AUTHORIZATION_REQUEST
    })
    fetch(`${baseUrl}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
        "password": password
      })
    })
      .then(checkResponse)
      .then(res => {
        dispatch(authorizationAction(res.success));
        dispatch(setUserDataAction(res.user.email, res.user.name));
        const accessToken = res.accessToken.split('Bearer ')[1];
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);
      })
      .catch(error => {
        dispatch({
          type: AUTHORIZATION_ERROR
        })
        console.log(error);
      })
  }
}

export {
  changePasswordFetchAction,
  resetPasswordFetchAction,
  registationFetchAction,
  authorizationFetchAction
};