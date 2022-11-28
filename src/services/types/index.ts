import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import { store } from "../store";
import { TAccountActions } from "./account";
import { TIngredientsActions } from "./ingredients";
import { TModalActions } from "./modal";
import { TUserActions } from "./user";
import { TWsOrdersAction } from "./web-socket";

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

type TApplicationActions = TAccountActions | TIngredientsActions | TModalActions | TUserActions | TWsOrdersAction;
export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

// common types

export interface IApiStatusState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message?: string;
}