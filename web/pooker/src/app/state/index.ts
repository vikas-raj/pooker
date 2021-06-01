import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';
import { appReducer } from './app.reducer';

export interface IAppState {
  error: string
}

export const reducers: ActionReducerMap<any> = {
  app: appReducer,
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [storeFreeze] : [];
