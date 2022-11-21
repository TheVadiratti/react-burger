import {
  CLOSE_MODAL,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_ERROR,
  SEND_ORDER_REQUEST,
  SEND_ORDER_SUCCESS,
  SEND_ORDER_ERROR,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  UPDATE_COUNTER,
  SORT_INGREDIENTS,
  SET_INITIAL_BUNS
} from '../../utils/constants';
import { IApiStatusState } from '../types';
import { TConstructorState, TIngredientsActions } from '../types/ingredients';
import { TIngredient } from '../../types';
import { ICloseModalAction } from '../types/modal';
import { Reducer } from 'redux';

interface IApiStatusWithIngredients extends IApiStatusState {
  data: TIngredient[];
}

interface IApiStatusWithOrderNum extends IApiStatusState {
  number?: number;
}

const ingredientsState = {
  data: [],
  isLoaded: false,
  isSuccess: false,
  isError: false
};

const orderState = {
  number: undefined,
  isLoaded: false,
  isSuccess: false,
  isError: false
}

const constructorState = {
  buns: undefined,
  main: [],
  counter: undefined
}

const ingredients: Reducer<IApiStatusWithIngredients, TIngredientsActions> = (state = ingredientsState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
      return {
        ...state,
        isLoaded: true,
        isSuccess: false,
        isError: false
      }
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        isLoaded: false,
        isSuccess: true,
        isError: false,
        data: action.data
      }

    case GET_INGREDIENTS_ERROR:
      return {
        ...state,
        isLoaded: false,
        isSuccess: false,
        isError: true
      }

    default:
      return state;
  }
}

const order: Reducer<IApiStatusWithOrderNum, TIngredientsActions | ICloseModalAction> = (state = orderState, action) => {
  switch (action.type) {
    case SEND_ORDER_REQUEST:
      return {
        ...state,
        isLoaded: true,
        isSuccess: false,
        isError: false
      }
    case SEND_ORDER_SUCCESS:
      return {
        ...state,
        isLoaded: false,
        isSuccess: true,
        isError: false,
        number: action.data
      }

    case SEND_ORDER_ERROR:
      return {
        ...state,
        isLoaded: false,
        isSuccess: false,
        isError: true
      }

    case CLOSE_MODAL:
      return {
        ...state,
        number: undefined
      }

    default:
      return state;
  }
}

const burgerConstructor: Reducer<TConstructorState, TIngredientsActions> = (state = constructorState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      if (action.ingredient.type === 'bun') {
        return {
          ...state,
          buns: action.ingredient
        }
      }
      else {
        return {
          ...state,
          main: [...state.main, action.ingredient]
        }
      }

    case UPDATE_COUNTER:
      return {
        ...state,
        counter: {
          ...state.counter,
          [action.id]: state.main.filter((item) => {
            return item._id === action.id;
          }).length
        }
      }

    case DELETE_INGREDIENT:
      return {
        ...state,
        main: state.main.filter((item, i) => {
          return item._id !== action.id || i !== action.index;
        })
      }

    case SORT_INGREDIENTS:
      const burgerItems = state.main;
      burgerItems.splice(action.to, 0, burgerItems.splice(action.from, 1)[0]);
      return {
        ...state,
        main: burgerItems
      }

    case SET_INITIAL_BUNS:
      return {
        ...state,
        buns: action.buns
      }

    default:
      return state;
  }
}

export { ingredients, order, burgerConstructor };