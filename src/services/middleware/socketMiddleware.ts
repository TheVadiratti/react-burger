import { TWsAllOrders, TWsMyOrders } from "../types/web-socket";
import { AnyAction, MiddlewareAPI } from 'redux';

export const socketMiddleware = (URL: string, Actions: TWsAllOrders | TWsMyOrders, needToken: boolean) => {
  const {start, success, error, closed, getMessage, sendMessage } = Actions;

  return (store: MiddlewareAPI) => {
    let socket: WebSocket;

    return (next: (i: AnyAction) => void) => (action: AnyAction) => {
      const { dispatch, getState } = store;
      const { type, payload } = action;

      if (type === start) {
        // объект класса WebSocket
        if (needToken) {
          const accessToken = localStorage.getItem('accessToken');
          socket = new WebSocket(`${URL}?token=${accessToken}`);
        }
        else {
          socket = new WebSocket(URL);
        }
      }
      if (socket) {

        // функция, которая вызывается при открытии сокета
        socket.onopen = event => {
          dispatch({ type: success, payload: event });
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = event => {
          dispatch({ type: error, payload: event });
        };

        // функция, которая вызывается при получении события от сервера
        socket.onmessage = event => {
          const { data } = event;
          dispatch({ type: getMessage, payload: data });
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = event => {
          dispatch({ type: closed, payload: event });
        };

        if (type === sendMessage) {
          const message = payload;
          // функция для отправки сообщения на сервер
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  };
};