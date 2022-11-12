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
} from '../../utils/constants';

interface IchangePasswordRequestAction {
  readonly type: typeof CHANGE_PASSWORD_REQUEST;
}

interface IchangePasswordSuccessAction {
  readonly type: typeof CHANGE_PASSWORD_SUCCESS;
  readonly message: string;
}

interface IchangePasswordErrorAction {
  readonly type: typeof CHANGE_PASSWORD_ERROR;
  readonly message: string;
}

interface IchangePasswordResetStateAction {
  readonly type: typeof CHANGE_PASSWORD_RESET_STATE;
}

interface IresetPasswordRequestAction {
  readonly type: typeof RESET_PASSWORD_REQUEST;
}

interface IresetPasswordSuccessAction {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
  readonly message: string;
}

interface IresetPasswordErrorAction {
  readonly type: typeof RESET_PASSWORD_ERROR;
  readonly message: string;
}

interface IregistrationRequestAction {
  readonly type: typeof REGISTRATION_REQUEST;
}

interface IregistrationSuccessAction {
  readonly type: typeof REGISTRATION_SUCCESS;
  readonly result: string;
}

interface IregistrationErrorAction {
  readonly type: typeof REGISTRATION_ERROR;
}

interface IauthorizationRequestAction {
  readonly type: typeof AUTHORIZATION_REQUEST;
}

interface IauthorizationSuccessAction {
  readonly type: typeof AUTHORIZATION_SUCCESS;
  readonly result: string;
}

interface IauthorizationErrorAction {
  readonly type: typeof AUTHORIZATION_ERROR;
}

interface IupdateTokenRequestAction {
  readonly type: typeof UPDATE_TOKEN_REQUEST;
}

interface IupdateTokenSuccessAction {
  readonly type: typeof UPDATE_TOKEN_SUCCESS;
}

interface IupdateTokenErrorAction {
  readonly type: typeof UPDATE_TOKEN_ERROR;
}

interface IlogoutRequestAction {
  readonly type: typeof LOGOUT_REQUEST;
}

interface IlogoutSuccessAction {
  readonly type: typeof LOGOUT_SUCCESS;
}

interface IlogoutErrortAction {
  readonly type: typeof LOGOUT_ERROR;
}

export type TaccountActions = 
  | IchangePasswordRequestAction
  | IchangePasswordSuccessAction
  | IchangePasswordErrorAction
  | IchangePasswordResetStateAction
  | IresetPasswordRequestAction
  | IresetPasswordSuccessAction
  | IresetPasswordErrorAction
  | IregistrationRequestAction
  | IregistrationSuccessAction
  | IregistrationErrorAction
  | IauthorizationRequestAction
  | IauthorizationSuccessAction
  | IauthorizationErrorAction
  | IupdateTokenRequestAction
  | IupdateTokenSuccessAction
  | IupdateTokenErrorAction
  | IlogoutRequestAction
  | IlogoutSuccessAction
  | IlogoutErrortAction;