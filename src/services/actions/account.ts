import {
  BASE_URL,
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
  UPDATE_TOKEN_REQUEST,
  UPDATE_TOKEN_SUCCESS,
  UPDATE_TOKEN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR
} from '../../utils/constants';
import { TAccountActions } from '../types/account';
import { AppDispatch } from '../types/index';
import { setUserDataAction, getUserDataFetchAction } from './user';
import { checkResponse } from '../../utils/utils';
import { AppThunk } from '../types/index';

// action func

function changePasswordAction(message: string): TAccountActions {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    message: message
  }
}

function resetPasswordAction(message: string): TAccountActions {
  return {
    type: RESET_PASSWORD_SUCCESS,
    message: message
  }
}

function registrationAction(result: string): TAccountActions {
  return {
    type: REGISTRATION_SUCCESS,
    result: result
  }
}

function authorizationAction(result: string): TAccountActions {
  return {
    type: AUTHORIZATION_SUCCESS,
    result: result
  }
}

// API

const changePasswordFetchAction: AppThunk = (email: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: CHANGE_PASSWORD_REQUEST
    })
    fetch(`${BASE_URL}/api/password-reset/`, {
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
        if (res.success) {
          dispatch(changePasswordAction(res.message))
        }
        else {
          dispatch({
            type: CHANGE_PASSWORD_ERROR,
            message: res.message
          })
        }
      })
      .catch(error => {
        dispatch({
          type: CHANGE_PASSWORD_ERROR,
          message: error.message
        })
        console.log(error);
      })
  }
}

const resetPasswordFetchAction: AppThunk = (password: string, token: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: RESET_PASSWORD_REQUEST
    })
    fetch(`${BASE_URL}/api/password-reset/reset/`, {
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
        if (res.success) {
          dispatch(resetPasswordAction(res.message));
        }
        else {
          dispatch({
            type: RESET_PASSWORD_ERROR,
            message: res.message
          })
        }
      })
      .catch(error => {
        dispatch({
          type: RESET_PASSWORD_ERROR,
          message: error.message
        })
        console.log(error);
      })
  }
}

const registationFetchAction: AppThunk = (email: string, password: string, name: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: REGISTRATION_REQUEST
    })
    fetch(`${BASE_URL}/api/auth/register/`, {
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
          type: REGISTRATION_ERROR,
          message: error.message
        })
        console.log(error);
      })
  }
}

const authorizationFetchAction: AppThunk = (email: string, password: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: AUTHORIZATION_REQUEST
    })
    fetch(`${BASE_URL}/api/auth/login`, {
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
          type: AUTHORIZATION_ERROR,
          message: error.message
        })
        console.log(error);
      })
  }
}

const updateTokenFetchAction: AppThunk = () => {
  return function (dispatch: AppDispatch  & AppThunk) {
    dispatch({
      type: UPDATE_TOKEN_REQUEST
    })
    fetch(`${BASE_URL}/api/auth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'token': localStorage.getItem('refreshToken')
      })
    })
      .then(checkResponse)
      .then(res => {
        if (res.success) {
          dispatch({
            type: UPDATE_TOKEN_SUCCESS
          });
          const accessToken = res.accessToken.split('Bearer ')[1];
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', res.refreshToken);
          dispatch(getUserDataFetchAction());
        }
        else {
          dispatch({
            type: UPDATE_TOKEN_ERROR
          })
        }

      })
      .catch(error => {
        dispatch({
          type: UPDATE_TOKEN_ERROR,
          message: error.message
        })
        console.log(error);
      })
  }
}

const logoutFetchAction: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: LOGOUT_REQUEST
    })
    fetch(`${BASE_URL}/api/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "token": localStorage.getItem('refreshToken')
      })
    })
      .then(checkResponse)
      .then(res => {
        if (res.success) {
          dispatch(setUserDataAction('', ''));
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          dispatch({
            type: LOGOUT_SUCCESS
          });
        }
        else {
          dispatch({
            type: LOGOUT_ERROR
          })
        }

      })
      .catch(error => {
        dispatch({
          type: LOGOUT_ERROR,
          message: error.message
        })
        console.log(error);
      })
  }
}

export {
  changePasswordFetchAction,
  resetPasswordFetchAction,
  registationFetchAction,
  authorizationFetchAction,
  updateTokenFetchAction,
  logoutFetchAction
};