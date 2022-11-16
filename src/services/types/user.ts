import {
  GET_USER_DATA_REQUEST,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROR,
  SET_USER_DATA,
  UPDATE_USER_DATA_REQUEST,
  UPDATE_USER_DATA_SUCCESS,
  UPDATE_USER_DATA_ERROR
} from "../../utils/constants";

export type TuserState = {
  email: string;
  name: string;
};

export interface IchangedUserData {
  readonly name?: string;
  readonly login?: string;
  readonly password?: string;
}

interface IgetUserDataRequestAction {
  readonly type: typeof GET_USER_DATA_REQUEST;
}

interface IgetUserDataSuccessAction {
  readonly type: typeof GET_USER_DATA_SUCCESS;
}

interface IgetUserDataErrorAction {
  readonly type: typeof GET_USER_DATA_ERROR;
}

interface IsetUserDataAction {
  readonly type: typeof SET_USER_DATA;
  readonly email: string;
  readonly name: string;
}

interface IupdateUserDataRequestAction {
  readonly type: typeof UPDATE_USER_DATA_REQUEST;
}
interface IupdateUserDataSuccessAction {
  readonly type: typeof UPDATE_USER_DATA_SUCCESS;
}
interface IupdateUserDataErrorAction {
  readonly type: typeof UPDATE_USER_DATA_ERROR;
}

export type TuserActions =
  | IgetUserDataRequestAction
  | IgetUserDataSuccessAction
  | IgetUserDataErrorAction
  | IsetUserDataAction
  | IupdateUserDataRequestAction
  | IupdateUserDataSuccessAction
  | IupdateUserDataErrorAction;