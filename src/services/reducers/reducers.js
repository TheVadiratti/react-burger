import { combineReducers } from "redux";
import user from './user';
import { modal } from "./modal";
import { ingredients, order, burgerConstructor } from './ingredients';
import { changePassword, resetPassword, registration } from './account';

export const rootReducer = combineReducers({
  ingredients,
  modal,
  order,
  burgerConstructor,
  changePassword,
  resetPassword,
  registration,
  user
})