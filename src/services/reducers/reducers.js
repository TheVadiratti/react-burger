import { GET_INGREDIENTS } from "../actions/actions";

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