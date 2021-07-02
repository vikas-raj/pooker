

import { createAction, props } from '@ngrx/store';

export const getUser = createAction(
  '[App Component] Get User Details',
  props<{ id: number }>());

export const setUser = createAction(
  '[App Management Component] Set User',
  props<{ userResponse: any }>());
  export const setShowLoader = createAction(
    '[App Management Component] Set ShowLoader',
    props<{ showLoader: boolean }>());