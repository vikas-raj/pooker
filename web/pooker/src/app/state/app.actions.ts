

import { createAction, props } from '@ngrx/store';

export const getUser = createAction(
  '[App Component] Get User Details',
  props<{ id: number }>());
export const setUser = createAction(
  '[App Component] Set User Details',
  props<{ data: any }>());
