import { combineReducers } from "redux";
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
      console.log('error', state);
      return state;
  }
}