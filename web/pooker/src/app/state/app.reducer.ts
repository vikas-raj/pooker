import { IAppState, } from './index';
import { createReducer, on, Action } from '@ngrx/store';
import * as AppActions from './app.actions';
export const initialState: IAppState = {
  error: '',
  user: {},
}
const _appReducer = createReducer(initialState,
  on(AppActions.setUser, (state, { userResponse }) => ({
    ...state,
    user: userResponse
  })),
);
export function appReducer(state: IAppState, action: Action) {
  return _appReducer(state, action);
}
