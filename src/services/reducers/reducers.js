import { CLOSE_MODAL, GET_INGREDIENTS, OPEN_INGREDIENT_DETAILS } from "../../utils/constants";

const initialState = {
  ingredients: [],
  modal: {
    open: false,
    type: '',
    dataIngredientDetails: {},
    dataOrderDetails: {}
  }
};

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
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
          dataIngredientDetails: action.dataIngredientDetails
        }
      }

      case CLOSE_MODAL:
        return {
          ...state,
          modal: initialState.modal
        }

    default: 
      return state;
  }
}