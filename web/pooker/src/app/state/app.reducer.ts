import { IAppState, } from './index';
import { createReducer, on, Action } from '@ngrx/store';
import * as AppActions from './app.actions';
export const initialState: IAppState = {
  error: '',
  user: {},
  showLoader: false
}
const _appReducer = createReducer(initialState,
  on(AppActions.setUser, (state, { userResponse }) => ({
    ...state,
    user: userResponse
  })),
  on(AppActions.setShowLoader, (state, { showLoader }) => ({
    ...state,
    showLoader: showLoader
  })),
);
export function appReducer(state: IAppState, action: Action) {
  return _appReducer(state, action);
}
