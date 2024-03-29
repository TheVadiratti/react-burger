import { TWsAllOrders, TWsMyOrders } from "../services/types/web-socket";

// action types
export const GET_INGREDIENTS_REQUEST: 'GET_INGREDIENTS_REQUEST' = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_ERROR: 'GET_INGREDIENTS_ERROR' = 'GET_INGREDIENTS_ERROR';
export const OPEN_INGREDIENT_DETAILS: 'OPEN_INGREDIENT_DETAILS' = 'OPEN_INGREDIENT_DETAILS';
export const OPEN_ORDER_INFO: 'OPEN_ORDER_INFO' = 'OPEN_ORDER_INFO';
export const OPEN_MY_ORDER_INFO: 'OPEN_MY_ORDER_INFO' = 'OPEN_MY_ORDER_INFO';
export const OPEN_ORDER_DETAILS: 'OPEN_ORDER_DETAILS' = 'OPEN_ORDER_DETAILS';
export const MAKE_MODAL_INGREDIENT: 'MAKE_MODAL_INGREDIENT' = 'MAKE_MODAL_INGREDIENT';
export const MAKE_MODAL_ORDER: 'MAKE_MODAL_ORDER' = 'MAKE_MODAL_ORDER';
export const MAKE_MODAL_MY_ORDER: 'MAKE_MODAL_MY_ORDER' = 'MAKE_MODAL_MY_ORDER';
export const SEND_ORDER_REQUEST: 'SEND_ORDER_REQUEST' = 'SEND_ORDER_REQUEST';
export const SEND_ORDER_SUCCESS: 'SEND_ORDER_SUCCESS' = 'SEND_ORDER_SUCCESS';
export const SEND_ORDER_ERROR: 'SEND_ORDER_ERROR' = 'SEND_ORDER_ERROR';
export const CLOSE_MODAL: 'CLOSE_MODAL' = 'CLOSE_MODAL';
export const ADD_INGREDIENT: 'ADD_INGREDIENT' = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT: 'DELETE_INGREDIENT' = 'DELETE_INGREDIENT';
export const UPDATE_COUNTER: 'UPDATE_COUNTER' = 'UPDATE_COUNTER';
export const SORT_INGREDIENTS: 'SORT_INGREDIENTS' = 'SORT_INGREDIENTS';
export const CHANGE_PASSWORD_REQUEST: 'CHANGE_PASSWORD_REQUEST' = 'CHANGE_PASSWORD_REQUEST';
export const CHANGE_PASSWORD_SUCCESS: 'CHANGE_PASSWORD_SUCCESS' = 'CHANGE_PASSWORD_SUCCESS';
export const CHANGE_PASSWORD_ERROR: 'CHANGE_PASSWORD_ERROR' = 'CHANGE_PASSWORD_ERROR';
export const CHANGE_PASSWORD_RESET_STATE: 'CHANGE_PASSWORD_RESET_STATE' = 'CHANGE_PASSWORD_RESET_STATE';
export const RESET_PASSWORD_REQUEST: 'RESET_PASSWORD_REQUEST' = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS: 'RESET_PASSWORD_SUCCESS' = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR: 'RESET_PASSWORD_ERROR' = 'RESET_PASSWORD_ERROR';
export const REGISTRATION_REQUEST: 'REGISTRATION_REQUEST' = 'REGISTRATION_REQUEST';
export const REGISTRATION_SUCCESS: 'REGISTRATION_SUCCESS' = 'REGISTRATION_SUCCESS';
export const REGISTRATION_ERROR: 'REGISTRATION_ERROR' = 'REGISTRATION_ERROR';
export const AUTHORIZATION_REQUEST: 'AUTHORIZATION_REQUEST' = 'AUTHORIZATION_REQUEST';
export const AUTHORIZATION_SUCCESS: 'AUTHORIZATION_SUCCESS' = 'AUTHORIZATION_SUCCESS';
export const AUTHORIZATION_ERROR: 'AUTHORIZATION_ERROR' = 'AUTHORIZATION_ERROR';
export const SET_USER_DATA: 'SET_USER_DATA' = 'SET_USER_DATA';
export const UPDATE_TOKEN_REQUEST: 'UPDATE_TOKEN_REQUEST' = 'UPDATE_TOKEN_REQUEST';
export const UPDATE_TOKEN_SUCCESS: 'UPDATE_TOKEN_SUCCESS' = 'UPDATE_TOKEN_SUCCESS';
export const UPDATE_TOKEN_ERROR: 'UPDATE_TOKEN_ERROR' = 'UPDATE_TOKEN_ERROR';
export const LOGOUT_REQUEST: 'LOGOUT_REQUEST' = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS: 'LOGOUT_SUCCESS' = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR: 'LOGOUT_ERROR' = 'LOGOUT_ERROR';
export const GET_USER_DATA_REQUEST: 'GET_USER_DATA_REQUEST' = 'GET_USER_DATA_REQUEST';
export const GET_USER_DATA_SUCCESS: 'GET_USER_DATA_SUCCESS' = 'GET_USER_DATA_SUCCESS';
export const GET_USER_DATA_ERROR: 'GET_USER_DATA_ERROR' = 'GET_USER_DATA_ERROR';
export const UPDATE_USER_DATA_REQUEST: 'UPDATE_USER_DATA_REQUEST' = 'UPDATE_USER_DATA_REQUEST';
export const UPDATE_USER_DATA_SUCCESS: 'UPDATE_USER_DATA_SUCCESS' = 'UPDATE_USER_DATA_SUCCESS';
export const UPDATE_USER_DATA_ERROR: 'UPDATE_USER_DATA_ERROR' = 'UPDATE_USER_DATA_ERROR';
export const SET_INITIAL_BUNS: 'SET_INITIAL_BUNS' = 'SET_INITIAL_BUNS';
export const WS_ALL_ORDERS_START: 'WS_ALL_ORDERS_START' = 'WS_ALL_ORDERS_START';
export const WS_ALL_ORDERS_SUCCESS: 'WS_ALL_ORDERS_SUCCESS' = 'WS_ALL_ORDERS_SUCCESS';
export const WS_ALL_ORDERS_ERROR: 'WS_ALL_ORDERS_ERROR' = 'WS_ALL_ORDERS_ERROR';
export const WS_ALL_ORDERS_CLOSED: 'WS_ALL_ORDERS_CLOSED' = 'WS_ALL_ORDERS_CLOSED';
export const WS_ALL_ORDERS_GET_MESSAGE: 'WS_ALL_ORDERS_GET_MESSAGE' = 'WS_ALL_ORDERS_GET_MESSAGE';
export const WS_ALL_ORDERS_SEND_MESSAGE: 'WS_ALL_ORDERS_SEND_MESSAGE' = 'WS_ALL_ORDERS_SEND_MESSAGE';
export const WS_MY_ORDERS_START: 'WS_MY_ORDERS_START' = 'WS_MY_ORDERS_START';
export const WS_MY_ORDERS_SUCCESS: 'WS_MY_ORDERS_SUCCESS' = 'WS_MY_ORDERS_SUCCESS';
export const WS_MY_ORDERS_ERROR: 'WS_MY_ORDERS_ERROR' = 'WS_MY_ORDERS_ERROR';
export const WS_MY_ORDERS_CLOSED: 'WS_MY_ORDERS_CLOSED' = 'WS_MY_ORDERS_CLOSED';
export const WS_MY_ORDERS_GET_MESSAGE: 'WS_MY_ORDERS_GET_MESSAGE' = 'WS_MY_ORDERS_GET_MESSAGE';
export const WS_MY_ORDERS_SEND_MESSAGE: 'WS_MY_ORDERS_SEND_MESSAGE' = 'WS_MY_ORDERS_SEND_MESSAGE';

export const wsAllOrdersActions: TWsAllOrders = {
  start: WS_ALL_ORDERS_START,
  success: WS_ALL_ORDERS_SUCCESS,
  error: WS_ALL_ORDERS_ERROR,
  closed: WS_ALL_ORDERS_CLOSED,
  getMessage: WS_ALL_ORDERS_GET_MESSAGE,
  sendMessage: WS_ALL_ORDERS_SEND_MESSAGE
}
export const wsMyOrdersActions: TWsMyOrders = {
  start: WS_MY_ORDERS_START,
  success: WS_MY_ORDERS_SUCCESS,
  error: WS_MY_ORDERS_ERROR,
  closed: WS_MY_ORDERS_CLOSED,
  getMessage: WS_MY_ORDERS_GET_MESSAGE,
  sendMessage: WS_MY_ORDERS_SEND_MESSAGE
}

// other
export const BASE_URL = 'http://norma.nomoreparties.space';
export const ALL_ORDERS_URL = 'wss://norma.nomoreparties.space/orders/all';
export const MY_ORDERS_URL = 'wss://norma.nomoreparties.space/orders';