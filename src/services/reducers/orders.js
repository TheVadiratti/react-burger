import {
  WS_GET_MESSAGE
} from '../../utils/constants';

const ordersState = {
  total: undefined,
  totalToday: undefined,
  list: []
};

const orders = (state = ordersState, action) => {
  switch (action.type) {
    case WS_GET_MESSAGE:
      const message = JSON.parse(action.payload);
      return {
        total: message.total,
        totalToday: message.totalToday,
        list: message.orders
      };
    default:
      return state;
  }
};

export { orders };