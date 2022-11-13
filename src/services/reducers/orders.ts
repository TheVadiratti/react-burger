import {
  wsAllOrdersActions, wsMyOrdersActions
} from '../../utils/constants';
import { IwsOrdersAction } from '../types/web-socket';

const ordersState = {
  all: {
    total: undefined,
    totalToday: undefined,
    list: []
  },
  my: {
    total: undefined,
    totalToday: undefined,
    list: []
  }
};

const orders = (state = ordersState, action: IwsOrdersAction) => {
  switch (action.type) {
    case wsAllOrdersActions.getMessage:
      const messageAll = JSON.parse(action.payload);
      return {
        ...state,
        all: {
          total: messageAll.total,
          totalToday: messageAll.totalToday,
          list: messageAll.orders
        }
      };
    case wsMyOrdersActions.getMessage:
      const messageMy = JSON.parse(action.payload);
      return {
        ...state,
        my: {
          total: messageMy.total,
          totalToday: messageMy.totalToday,
          list: messageMy.orders
        }

      };
    default:
      return state;
  }
};

export { orders };