import { GET_INGREDIENTS } from "../../utils/constants";

const initialState = {};

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.data
      };

    default: 
      return state;
  }
}