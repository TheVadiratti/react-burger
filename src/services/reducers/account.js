import {
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
  AUTHORIZATION_ERROR
} from "../../utils/constants";

const changePasswordState = {
  isLoaded: false,
  isSuccess: false,
  isError: false,
  message: null
}

const resetPasswordState = {
  isLoaded: false,
  isSuccess: false,
  isError: false,
  message: null
}

const registrationState = {
  isLoaded: false,
  isSuccess: false,
  isError: false
}

const authorizationState = {
  isLoaded: false,
  isSuccess: false,
  isError: false
}

const changePassword = (state = changePasswordState, action) => {
  switch(action.type) {
    case CHANGE_PASSWORD_REQUEST:
      return {
        ...state,
        isLoaded: true,
        isSuccess: false,
        isError: false
      }
    
    case CHANGE_PASSWORD_SUCCESS:
      if(action.result) {
        return {
          isLoaded: false,
          isSuccess: true,
          isError: false,
          message: action.message
        }
      }
      else {
        return {
          isLoaded: false,
          isSuccess: false,
          isError: true,
          message: action.message
        }
      }

    case CHANGE_PASSWORD_ERROR:
      return {
        ...state,
        isLoaded: false,
        isSuccess: false,
        isError: true
      }
      
    default:
      return state;
  }
}

const resetPassword = (state = resetPasswordState, action) => {
  switch(action.type) {
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        isLoaded: true,
        isSuccess: false,
        isError: false
      }
    
    case RESET_PASSWORD_SUCCESS:
      if(action.result) {
        return {
          isLoaded: false,
          isSuccess: true,
          isError: false,
          message: action.message
        }
      }
      else {
        return {
          isLoaded: false,
          isSuccess: false,
          isError: true,
          message: action.message
        }
      }

    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        isLoaded: false,
        isSuccess: false,
        isError: true
      }
      
    default:
      return state;
  }
}

const registration = (state = registrationState, action) => {
  switch(action.type) {
    case REGISTRATION_REQUEST:
      return {
        ...state,
        isLoaded: true,
        isSuccess: false,
        isError: false
      }
    
    case REGISTRATION_SUCCESS:
      if(action.result) {
        return {
          isLoaded: false,
          isSuccess: true,
          isError: false
        }
      }
      else {
        return {
          isLoaded: false,
          isSuccess: false,
          isError: true
        }
      }

    case REGISTRATION_ERROR:
      return {
        ...state,
        isLoaded: false,
        isSuccess: false,
        isError: true
      }
      
    default:
      return state;
  }
}

const authorization = (state = authorizationState, action) => {
  switch(action.type) {
    case AUTHORIZATION_REQUEST:
      return {
        ...state,
        isLoaded: true,
        isSuccess: false,
        isError: false
      }
    
    case AUTHORIZATION_SUCCESS:
      if(action.result) {
        return {
          isLoaded: false,
          isSuccess: true,
          isError: false
        }
      }
      else {
        return {
          isLoaded: false,
          isSuccess: false,
          isError: true
        }
      }

    case AUTHORIZATION_ERROR:
      return {
        ...state,
        isLoaded: false,
        isSuccess: false,
        isError: true
      }
      
    default:
      return state;
  }
}

export { changePassword, resetPassword, registration, authorization };