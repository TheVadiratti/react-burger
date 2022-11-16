import { store } from "../store";

export type AppDispatch = typeof store.dispatch;

export interface IapiStatusState {
  isLoaded: boolean;
  isSuccess: boolean;
  isError: boolean;
}

export interface IapiStatusWithMessage extends IapiStatusState {
  message: string | null;
}