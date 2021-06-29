import { createAction, props } from '@ngrx/store';
import { IRegisterUserDto } from '../models/IRegisterUserDto';
import { ILoginUserDto } from '../models/ILoginUserDto';

export const registerUser = createAction(
  '[User Management Component] Register User',
  props<{ registerUserDto: IRegisterUserDto }>());
export const setRegisterUserResponse = createAction(
  '[User Management Component]Set Register User Response',
  props<{ registerUserResponse: string }>());

export const loginUser = createAction(
  '[User Management Component] Login User',
  props<{ loginUserDto: ILoginUserDto }>());

