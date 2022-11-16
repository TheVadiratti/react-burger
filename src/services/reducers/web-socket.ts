import { wsAllOrdersActions, wsMyOrdersActions } from '../../utils/constants';
import { TwsState, IwsOrdersAction } from '../types/web-socket';

const socketState: TwsState = {
  wsConnected: false,
  error: undefined
};

export const ws = (state = socketState, action: IwsOrdersAction) => {
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