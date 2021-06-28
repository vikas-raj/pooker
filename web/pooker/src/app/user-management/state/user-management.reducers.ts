import { IUserManagementState } from './index';
import { createReducer, on, Action } from '@ngrx/store';
import * as UserManagementActions from './user-management.actions';

export const initialState: IUserManagementState = {
  registerResponse: '',
}
const _userManagementReducer = createReducer(initialState, 
  on(UserManagementActions.setRegisterUserResponse, (state, { registerUserResponse }) => ({
    ...state,
    registerResponse: registerUserResponse
  })),
);
export function userManagementReducer(state: IUserManagementState, action: Action) {
  return _userManagementReducer(state, action);
}
