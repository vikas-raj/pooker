import { createAction, props } from '@ngrx/store';


export const registerUser = createAction(
  '[User Management Component] Register User',
  props<{ registerUserDto: any }>());
export const setRegisterUserResponse = createAction(
  '[User Management Component]Set Register User Response',
  props<{ registerUserResponse: string }>());

export const loginUser = createAction(
  '[User Management Component] Login User',
  props<{ loginUserDto: any }>());

