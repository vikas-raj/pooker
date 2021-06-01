import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';

export interface IAppState {
  error: string
}

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [storeFreeze] : [];
