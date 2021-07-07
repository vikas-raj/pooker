import { createAction, props } from "@ngrx/store";
import { IGame } from "src/app/models/IGame";
import { IGameBoardDto } from "../models/IGameBoardDto";
import { IUserStoryRequest } from "../models/IUserStoryRequest";

export const getGameById = createAction(
    '[Planning Component] Get Game Detail by Id',
    props<{ userGuid: string }>());
export const getPlanningGameById = createAction(
    '[Planning Component] Get Planning Game Detail by Id',
    props<{ userGuid: string }>());
export const setGame = createAction(
    '[Planning Component] Set Game Detail by Id',
    props<{ data: IGame }>());

export const insertUpdateUserStory = createAction(
    '[Planning Component] Insert update User Story',
    props<{ data: IUserStoryRequest }>());

export const selectStoryPointOnGameBoard = createAction(
    '[Planning Component] Select Story Point',
    props<{ point: IGameBoardDto }>());