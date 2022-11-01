import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers/reducers';
import thunk from 'redux-thunk';
import { socketMiddleware } from './middleware/socketMiddleware';
import { ALL_ORDERS_URL, MY_ORDERS_URL, wsAllOrdersActions, wsMyOrdersActions } from '../utils/constants';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(ALL_ORDERS_URL, wsAllOrdersActions, false), socketMiddleware(MY_ORDERS_URL, wsMyOrdersActions, true)));

export const store = createStore(rootReducer, enhancer);

console.log(store.getState());