

import { createAction, props } from '@ngrx/store';
import { IGame } from '../../models/IGame';
import { IGameRequest } from '../models/IGameRequest';

export const getGames = createAction(
  '[Dashboard Component] Get Game Details');

export const setGames = createAction(
  '[Dashboard Component] Set Game Details',
  props<{ data: IGame[] }>());
export const saveGame =  createAction(
  '[Dashboard Component] Save Game Details',
  props<{ data: IGameRequest }>());
