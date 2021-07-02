import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';
import { IUser } from '../models/Iuser';
import { appReducer } from './app.reducer';

export interface IAppState {
  error?: string,
  user?: IUser,
  showLoader?: boolean,
}
export const getAppState = (state: any)=> state.app;

export const selectShowLoader= createSelector(
  getAppState,
  state => state?.showLoader
)
export const reducers: ActionReducerMap<any> = {
  app: appReducer,
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [storeFreeze] : [];
