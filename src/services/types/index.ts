import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import { store } from "../store";
import { TaccountActions } from "./account";
import { TingredientsActions } from "./ingredients";
import { TmodalActions } from "./modal";
import { TuserActions } from "./user";
import { TwsOrdersAction } from "./web-socket";

export type AppDispatch = typeof store.dispatch;

export interface IapiStatusState {
  isLoaded: boolean;
  isSuccess: boolean;
  isError: boolean;
}

export interface IapiStatusWithMessage extends IapiStatusState {
  message: string | null;
}

export type RootState = ReturnType<typeof store.getState>;

type TapplicationActions = TaccountActions | TingredientsActions | TmodalActions | TuserActions | TwsOrdersAction;
export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TapplicationActions>>;