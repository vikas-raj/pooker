import { IDashboardState } from './index';
import { createReducer, on, Action } from '@ngrx/store';
import * as DashboardActions from './dashboard.action';

export const initialState: IDashboardState = {
  games: [],
}
const _dashboardReducer = createReducer(initialState,
  on(DashboardActions.setGames, (state, { data }) => ({
    ...state,
    games: data
  })),
);
export function dashboardReducer(state: IDashboardState, action: Action) {
  return _dashboardReducer(state, action);
}
