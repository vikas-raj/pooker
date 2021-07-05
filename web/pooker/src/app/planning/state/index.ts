import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../../environments/environment';
import { IGame } from '../../models/IGame';
import { planningReducer } from './planning.reducers';

export interface IPlanningState {
  game: IGame;
}

export const selectDashboardFeature = (state: any) => {
  return state.PlanningState
}

export const selectGame = createSelector(
  selectDashboardFeature,
  (state: IPlanningState) => {
    return state.game;
  }
);

export const reducers: ActionReducerMap<any> = {
    planning: planningReducer,
};

export const metaReducers: MetaReducer<IPlanningState>[] = !environment.production ? [storeFreeze] : [];
