import { Reducer } from "redux";
import {
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD_RESET_STATE,
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
} from "../../utils/constants";
import { IApiStatusState } from "../types";
import { TAccountActions } from "../types/account";

const changePasswordState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: undefined
}

const resetPasswordState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: undefined
}

const registrationState = {
  isLoading: false,
  isSuccess: false,
  isError: false
}

const authorizationState = {
  isLoading: false,
  isSuccess: false,
  isError: false
}

const updateTokenState = {
  isLoading: false,
  isSuccess: false,
  isError: false
}

const logoutState = {
  isLoading: false,
  isSuccess: false,
  isError: false
}

const changePassword: Reducer<IApiStatusState, TAccountActions> = (state = changePasswordState, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false
      }

    case CHANGE_PASSWORD_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
        message: action.message
      }

    case CHANGE_PASSWORD_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
        message: action.message
      }

    case CHANGE_PASSWORD_RESET_STATE:
      return changePasswordState

    default:
      return state;
  }
}

const resetPassword: Reducer<IApiStatusState, TAccountActions> = (state = resetPasswordState, action) => {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false
      }

    case RESET_PASSWORD_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
        message: action.message
      }

    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true
      }

    default:
      return state;
  }
}

const registration: Reducer<IApiStatusState, TAccountActions> = (state = registrationState, action) => {
  switch (action.type) {
    case REGISTRATION_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false
      }

    case REGISTRATION_SUCCESS:
      if (action.result) {
        return {
          isLoading: false,
          isSuccess: true,
          isError: false
        }
      }
      else {
        return {
          isLoading: false,
          isSuccess: false,
          isError: true
        }
      }

    case REGISTRATION_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true
      }

    default:
      return state;
  }
}

const authorization: Reducer<IApiStatusState, TAccountActions> = (state = authorizationState, action) => {
  switch (action.type) {
    case AUTHORIZATION_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false
      }

    case AUTHORIZATION_SUCCESS:
      if (action.result) {
        return {
          isLoading: false,
          isSuccess: true,
          isError: false
        }
      }
      else {
        return {
          isLoading: false,
          isSuccess: false,
          isError: true
        }
      }

    case AUTHORIZATION_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true
      }

    default:
      return state;
  }
}

const updateToken: Reducer<IApiStatusState, TAccountActions> = (state = updateTokenState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false
      }

    case UPDATE_TOKEN_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isError: false
      }

    case UPDATE_TOKEN_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true
      }

    default:
      return state;
  }
}

const logout: Reducer<IApiStatusState, TAccountActions> = (state = logoutState, action) => {
  switch (action.type) {
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false
      }

    case LOGOUT_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isError: false
      }

    case LOGOUT_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true
      }

    default:
      return state;
  }
}

export { changePassword, resetPassword, registration, authorization, updateToken, logout };