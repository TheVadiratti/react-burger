import { GET_INGREDIENTS, OPEN_INGREDIENT_DETAILS } from "../../utils/constants";

const initialState = {};

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
        ingredintDetails: {
          open: true,
          data: action.data
        }
      }

    default: 
      return state;
  }
}