import {
  wsAllOrdersActions, wsMyOrdersActions
} from '../../utils/constants';
import { TordersState } from '../types/orders';
import { IwsOrdersAction } from '../types/web-socket';

const ordersState: TordersState = {
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
      console.log(messageAll);
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