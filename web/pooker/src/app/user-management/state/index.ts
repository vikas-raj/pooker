import { IUser } from "../../models/Iuser";
import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../../environments/environment';
import { userManagementReducer } from "./user-management.reducers";

export interface IUserManagementState {
  registerResponse: string;
}

export const selectDashboardFeature = (state: any) => {
  return state.UserManagementState
}

export const selectRegisterResponse = createSelector(
  selectDashboardFeature,
  (state: IUserManagementState) => {
    return state.registerResponse;
  }
);

export const reducers: ActionReducerMap<any> = {
  userManagement: userManagementReducer,
};

export const metaReducers: MetaReducer<IUserManagementState>[] = !environment.production ? [storeFreeze] : [];
