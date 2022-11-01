import { combineReducers } from "redux";
import { user, getUserData, updateUserData } from './user';
import { modal } from "./modal";
import { ingredients, order, burgerConstructor } from './ingredients';
import { changePassword, resetPassword, registration, authorization, updateToken, logout } from './account';
import { ws } from "./web-socket";
import { orders } from "./orders";

export const rootReducer = combineReducers({
  ingredients,
  modal,
  order,
  burgerConstructor,
  changePassword,
  resetPassword,
  registration,
  authorization,
  user,
  updateToken,
  logout,
  getUserData,
  updateUserData,
  ws,
  orders
})