import {
  WS_ALL_ORDERS_START,
  WS_ALL_ORDERS_SUCCESS,
  WS_ALL_ORDERS_ERROR,
  WS_ALL_ORDERS_CLOSED,
  WS_ALL_ORDERS_GET_MESSAGE,
  WS_ALL_ORDERS_SEND_MESSAGE,
  WS_MY_ORDERS_START,
  WS_MY_ORDERS_SUCCESS,
  WS_MY_ORDERS_ERROR,
  WS_MY_ORDERS_CLOSED,
  WS_MY_ORDERS_GET_MESSAGE,
  WS_MY_ORDERS_SEND_MESSAGE
} from '../../utils/constants';

export type TwsState = {
  wsConnected: boolean;
  error: undefined | string;
};

export type TwsAllOrders = {
  start: typeof WS_ALL_ORDERS_START;
  success: typeof WS_ALL_ORDERS_SUCCESS;
  error: typeof WS_ALL_ORDERS_ERROR;
  closed: typeof WS_ALL_ORDERS_CLOSED;
  getMessage: typeof WS_ALL_ORDERS_GET_MESSAGE;
  sendMessage: typeof WS_ALL_ORDERS_SEND_MESSAGE;
};

export type TwsMyOrders = {
  start: typeof WS_MY_ORDERS_START;
  success: typeof WS_MY_ORDERS_SUCCESS;
  error: typeof WS_MY_ORDERS_ERROR;
  closed: typeof WS_MY_ORDERS_CLOSED;
  getMessage: typeof WS_MY_ORDERS_GET_MESSAGE;
  sendMessage: typeof WS_MY_ORDERS_SEND_MESSAGE;
};

type TwsOrders =
  | typeof WS_ALL_ORDERS_START
  | typeof WS_ALL_ORDERS_SUCCESS
  | typeof WS_ALL_ORDERS_ERROR
  | typeof WS_ALL_ORDERS_CLOSED
  | typeof WS_ALL_ORDERS_GET_MESSAGE
  | typeof WS_ALL_ORDERS_SEND_MESSAGE
  | typeof WS_MY_ORDERS_START
  | typeof WS_MY_ORDERS_SUCCESS
  | typeof WS_MY_ORDERS_ERROR
  | typeof WS_MY_ORDERS_CLOSED
  | typeof WS_MY_ORDERS_GET_MESSAGE
  | typeof WS_MY_ORDERS_SEND_MESSAGE;

export type TwsOrdersAction = {
  type: TwsOrders;
  payload: string;
};