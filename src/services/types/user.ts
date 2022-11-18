import {
  GET_USER_DATA_REQUEST,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROR,
  SET_USER_DATA,
  UPDATE_USER_DATA_REQUEST,
  UPDATE_USER_DATA_SUCCESS,
  UPDATE_USER_DATA_ERROR
} from "../../utils/constants";

export type TUserState = {
  email: string;
  name: string;
};

export interface IChangedUserData {
  readonly name?: string;
  readonly login?: string;
  readonly password?: string;
}

interface IGetUserDataRequestAction {
  readonly type: typeof GET_USER_DATA_REQUEST;
}

interface IGetUserDataSuccessAction {
  readonly type: typeof GET_USER_DATA_SUCCESS;
}

interface IGetUserDataErrorAction {
  readonly type: typeof GET_USER_DATA_ERROR;
}

interface ISetUserDataAction {
  readonly type: typeof SET_USER_DATA;
  readonly email: string;
  readonly name: string;
}

interface IUpdateUserDataRequestAction {
  readonly type: typeof UPDATE_USER_DATA_REQUEST;
}
interface IUpdateUserDataSuccessAction {
  readonly type: typeof UPDATE_USER_DATA_SUCCESS;
}
interface IUpdateUserDataErrorAction {
  readonly type: typeof UPDATE_USER_DATA_ERROR;
}

export type TUserActions =
  | IGetUserDataRequestAction
  | IGetUserDataSuccessAction
  | IGetUserDataErrorAction
  | ISetUserDataAction
  | IUpdateUserDataRequestAction
  | IUpdateUserDataSuccessAction
  | IUpdateUserDataErrorAction;