import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
} from '../../utils/constants';

const socketState = {
  wsConnected: false,
  error: undefined
};

export const ws = (state = socketState, action) => {
  switch (action.type) {
    
    case WS_CONNECTION_SUCCESS:
      return {
        wsConnected: true,
        error: undefined
      };

    case WS_CONNECTION_ERROR:
      return {
        wsConnected: false,
        error: action.payload
      };

    case WS_CONNECTION_CLOSED:
      return {
        wsConnected: false,
        error: undefined
      };
    default:
      return state;
  }
};