import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';
import { IUser } from '../models/Iuser';
import { appReducer } from './app.reducer';

export interface IAppState {
  error?: string,
  user?: IUser,
}

export const reducers: ActionReducerMap<any> = {
  app: appReducer,
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [storeFreeze] : [];
