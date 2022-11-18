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
import { IapiStatusState } from '../types';
import { TconstructorState, TingredientsActions } from '../types/ingredients';
import { Tingredient } from '../../types';
import { IcloseModalAction } from '../types/modal';

interface IapiStatusWithIngredients extends IapiStatusState {
  data: Tingredient[];
}

interface IapiStatusWithOrderNum extends IapiStatusState {
  number: number | null;
}

const ingredientsState: IapiStatusWithIngredients = {
  data: [],
  isLoaded: false,
  isSuccess: false,
  isError: false
};

const orderState: IapiStatusWithOrderNum = {
  number: null,
  isLoaded: false,
  isSuccess: false,
  isError: false
}

const constructorState: TconstructorState = {
  buns: {},
  main: [],
  counter: {}
}

const ingredients = (state = ingredientsState, action: TingredientsActions) => {
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

const order = (state = orderState, action: TingredientsActions | IcloseModalAction) => {
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
        number: null
      }

    default:
      return state;
  }
}

const burgerConstructor = (state = constructorState, action: TingredientsActions) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        buns: action.ingredient.type === 'bun' ? action.ingredient : state.buns,
        main: action.ingredient.type !== 'bun' ? [...state.main, action.ingredient] : state.main
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