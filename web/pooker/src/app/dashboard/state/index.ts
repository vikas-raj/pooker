import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../../environments/environment';
import { IGame } from '../../models/IGame';
import { dashboardReducer } from './dashboard.reducers';

export interface IDashboardState {
  games: IGame[];
}

export const selectDashboardFeature = (state: any) => {
  return state.DashboardState
}

export const selectGames = createSelector(
  selectDashboardFeature,
  (state: IDashboardState) => {
    return state.games;
  }
);

export const reducers: ActionReducerMap<any> = {
  dashboard: dashboardReducer,
};

export const metaReducers: MetaReducer<IDashboardState>[] = !environment.production ? [storeFreeze] : [];
