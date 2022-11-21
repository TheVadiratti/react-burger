import { Reducer } from 'redux';
import { wsAllOrdersActions, wsMyOrdersActions } from '../../utils/constants';
import { TWsState, TWsOrdersAction } from '../types/web-socket';

const socketState = {
  wsConnected: false,
  error: undefined
};

export const ws: Reducer<TWsState, TWsOrdersAction> = (state = socketState, action) => {
  switch (action.type) {
    case wsAllOrdersActions.success || wsMyOrdersActions.success:
      return {
        wsConnected: true,
        error: undefined
      };

    case wsAllOrdersActions.error || wsMyOrdersActions.error:
      return {
        wsConnected: false,
        error: action.payload
      };

    case wsAllOrdersActions.closed || wsMyOrdersActions.closed:
      return {
        wsConnected: false,
        error: undefined
      };
    default:
      return state;
  }
};