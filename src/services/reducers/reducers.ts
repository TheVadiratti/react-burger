import { combineReducers } from "redux";
import { user, getUserData, updateUserData } from './user';
import { modal } from "./modal";
import { ingredients, order, burgerConstructor } from './ingredients';
import { changePassword, resetPassword, registration, authorization, updateToken, logout } from './account';
import { ws } from "./web-socket";
import { orders } from "./orders";

export const rootReducer = combineReducers({
  ingredients: ingredients,
  modal: modal,
  order: order,
  burgerConstructor: burgerConstructor,
  changePassword: changePassword,
  resetPassword: resetPassword,
  registration: registration,
  authorization: authorization,
  user: user,
  updateToken: updateToken,
  logout: logout,
  getUserData: getUserData,
  updateUserData: updateUserData,
  ws: ws,
  orders: orders
})