import { SET_USER_DATA,
  GET_USER_DATA_REQUEST,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROR,
  UPDATE_USER_DATA_REQUEST,
  UPDATE_USER_DATA_SUCCESS,
  UPDATE_USER_DATA_ERROR
} from "../../utils/constants";
import { TUserState, TUserActions } from "../types/user";
import { IApiStatusState } from "../types";

const userState: TUserState = {
  email: '',
  name: ''
}

const getUserDataState: IApiStatusState = {
  isLoaded: false,
  isSuccess: false,
  isError: false
}

const updateUserDataState: IApiStatusState = {
  isLoaded: false,
  isSuccess: false,
  isError: false
}

const user = (state = userState, action: TUserActions) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        email: action.email,
        name: action.name
      }

    default:
      return state;
  }
}

const getUserData = (state = getUserDataState, action: TUserActions) => {
  switch (action.type) {
    case GET_USER_DATA_REQUEST:
      return {
        ...state,
        isLoaded: true,
        isSuccess: false,
        isError: false
      }

    case GET_USER_DATA_SUCCESS:
      return {
        isLoaded: false,
        isSuccess: true,
        isError: false
      }

    case GET_USER_DATA_ERROR:
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

const updateUserData = (state = updateUserDataState, action: TUserActions) => {
  switch (action.type) {
    case UPDATE_USER_DATA_REQUEST:
      return {
        ...state,
        isLoaded: true,
        isSuccess: false,
        isError: false
      }

    case UPDATE_USER_DATA_SUCCESS:
      return {
        isLoaded: false,
        isSuccess: true,
        isError: false
      }

    case UPDATE_USER_DATA_ERROR:
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

export {
  user,
  getUserData,
  updateUserData
};