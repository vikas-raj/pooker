import { IPlanningState } from './index';
import { createReducer, on, Action } from '@ngrx/store';
import * as PlanningActions from './planning.action';

export const initialState: IPlanningState = {
  game: {},
}
const _planningReducer = createReducer(initialState,
  on(PlanningActions.setGame, (state, { data }) => ({
    ...state,
    game: data
  })),
);

export function planningReducer(state: IPlanningState, action: Action) {
  return _planningReducer(state, action);
}
