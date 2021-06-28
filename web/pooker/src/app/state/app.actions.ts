

import { createAction, props } from '@ngrx/store';

export const getUser = createAction(
  '[App Component] Get User Details',
  props<{ id: number }>());

export const setUser = createAction(
  '[User Management Component] Set User',
  props<{ userResponse: any }>());
