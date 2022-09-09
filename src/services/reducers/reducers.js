import { CLOSE_MODAL, GET_INGREDIENTS, OPEN_INGREDIENT_DETAILS, OPEN_ORDER_DETAILS, ADD_INGREDIENT } from "../../utils/constants";

const initialState = {
  ingredients: [],
  modal: {
    open: false,
    type: '',
    dataIngredientDetails: {},
    dataOrderDetails: {}
  },
  constructor: {
    buns: {},
    main: []
  }
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.data
      };

    case OPEN_INGREDIENT_DETAILS:
      return {
        ...state,
        modal: {
          ...state.modal,
          open: true,
          type: 'IngredientDetails',
          dataIngredientDetails: action.data
        }
      }

    case OPEN_ORDER_DETAILS:
      return {
        ...state,
        modal: {
          ...state.modal,
          open: true,
          type: 'OrderDetails',
          dataOrderDetails: action.data
        }
      }

    case CLOSE_MODAL:
      return {
        ...state,
        modal: initialState.modal
      }

    case ADD_INGREDIENT:
      return {
        ...state,
        constructor: {
          buns: action.ingredient.type === 'bun' ? action.ingredient : state.constructor.buns,
          main: action.ingredient.type !== 'bun' ? [...state.constructor.main, action.ingredient] : state.constructor.main
        }
      }

    default:
      return state;
  }
}