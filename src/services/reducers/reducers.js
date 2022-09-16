import { combineReducers } from "redux";
import {
  CLOSE_MODAL,
  GET_INGREDIENTS_SUCCESS,
  OPEN_INGREDIENT_DETAILS,
  GET_INGREDIENTS_ERROR,
  OPEN_ORDER_DETAILS,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  UPDATE_COUNTER,
  SORT_INGREDIENTS,
  GET_INGREDIENTS_REQUEST
} from "../../utils/constants";

const ingredientsState = {
  data: [],
  isLoaded: false,
  isSuccess: false,
  isError: false
};

const modalState = {
  open: false,
  type: '',
  dataIngredientDetails: {},
  dataOrderDetails: {}
}

const constructorState = {
  buns: {},
  main: [],
  counter: {}
}

const ingredients = (state = ingredientsState, action) => {
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

const modal = (state = modalState, action) => {
  switch (action.type) {
    case OPEN_INGREDIENT_DETAILS:
      return {
        ...state,
        open: true,
        type: 'IngredientDetails',
        dataIngredientDetails: action.data
      }

    case OPEN_ORDER_DETAILS:
      return {
        ...state,
        open: true,
        type: 'OrderDetails',
        dataOrderDetails: action.data
      }

    case CLOSE_MODAL:
      return modalState

    default:
      return state;
  }
}

const burgerConstructor = (state = constructorState, action) => {
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
          [action.id]: state.main.filter(item => {
            return item._id === action.id
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

    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  ingredients,
  modal,
  burgerConstructor
})