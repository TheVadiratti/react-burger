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

interface IChangePasswordRequestAction {
  readonly type: typeof CHANGE_PASSWORD_REQUEST;
}

interface IChangePasswordSuccessAction {
  readonly type: typeof CHANGE_PASSWORD_SUCCESS;
  readonly message: string;
}

interface IChangePasswordErrorAction {
  readonly type: typeof CHANGE_PASSWORD_ERROR;
}

interface IChangePasswordResetStateAction {
  readonly type: typeof CHANGE_PASSWORD_RESET_STATE;
}

interface IResetPasswordRequestAction {
  readonly type: typeof RESET_PASSWORD_REQUEST;
}

interface IResetPasswordSuccessAction {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
  readonly message: string;
}

interface IResetPasswordErrorAction {
  readonly type: typeof RESET_PASSWORD_ERROR;
}

interface IRegistrationRequestAction {
  readonly type: typeof REGISTRATION_REQUEST;
}

interface IRegistrationSuccessAction {
  readonly type: typeof REGISTRATION_SUCCESS;
  readonly result: string;
}

interface IRegistrationErrorAction {
  readonly type: typeof REGISTRATION_ERROR;
}

interface IAuthorizationRequestAction {
  readonly type: typeof AUTHORIZATION_REQUEST;
}

interface IAuthorizationSuccessAction {
  readonly type: typeof AUTHORIZATION_SUCCESS;
  readonly result: string;
}

interface IAuthorizationErrorAction {
  readonly type: typeof AUTHORIZATION_ERROR;
}

interface IUpdateTokenRequestAction {
  readonly type: typeof UPDATE_TOKEN_REQUEST;
}

interface IUpdateTokenSuccessAction {
  readonly type: typeof UPDATE_TOKEN_SUCCESS;
}

interface IUpdateTokenErrorAction {
  readonly type: typeof UPDATE_TOKEN_ERROR;
}

interface ILogoutRequestAction {
  readonly type: typeof LOGOUT_REQUEST;
}

interface ILogoutSuccessAction {
  readonly type: typeof LOGOUT_SUCCESS;
}

interface ILogoutErrortAction {
  readonly type: typeof LOGOUT_ERROR;
}

export type TAccountActions = 
  | IChangePasswordRequestAction
  | IChangePasswordSuccessAction
  | IChangePasswordErrorAction
  | IChangePasswordResetStateAction
  | IResetPasswordRequestAction
  | IResetPasswordSuccessAction
  | IResetPasswordErrorAction
  | IRegistrationRequestAction
  | IRegistrationSuccessAction
  | IRegistrationErrorAction
  | IAuthorizationRequestAction
  | IAuthorizationSuccessAction
  | IAuthorizationErrorAction
  | IUpdateTokenRequestAction
  | IUpdateTokenSuccessAction
  | IUpdateTokenErrorAction
  | ILogoutRequestAction
  | ILogoutSuccessAction
  | ILogoutErrortAction;