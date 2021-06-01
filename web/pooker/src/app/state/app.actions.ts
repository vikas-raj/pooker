

import { createAction, props } from '@ngrx/store';

export const getUser = createAction(
  '[App Component] Get Assignment Details',
  props<{ id: number }>());
export const setUser = createAction(
  '[App Component] Set Assignment Details',
  props<{ data: any }>());
