

import { createAction, props } from '@ngrx/store';
import { IGame } from '../../models/IGame';
import { IGameRequest } from '../models/IGameRequest';

export const getGames = createAction(
  '[App Component] Get Game Details');

  export const getGameById = createAction(
  '[App Component] Get Game Detail bi Id',
  props<{ userGuid: string }>());

export const setGames = createAction(
  '[App Component] Set Game Details',
  props<{ data: IGame[] }>());
export const saveGame =  createAction(
  '[App Component] Save Game Details',
  props<{ data: IGameRequest }>());
