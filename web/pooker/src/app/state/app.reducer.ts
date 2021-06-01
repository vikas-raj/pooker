import { IAppState, } from './index';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: IAppState = {
  error: '',
}
  const _appReducer = createReducer(initialState,
//  on(AppActions.setShowLoader, (state, { showLoader }) => ({
//    ...state,
//    showLoader
//  })),
);
export function appReducer(state: IAppState, action: Action) {
  return _appReducer(state, action);
}
