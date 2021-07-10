import { createAction, props } from "@ngrx/store";
import { ICard } from "src/app/models/ICard";
import { IGame } from "src/app/models/IGame";
import { IGameBoardDto } from "../models/IGameBoardDto";
import { IUserStoryRequest } from "../models/IUserStoryRequest";


export const setPlanningResponse = createAction(
    '[Planning Component] Set Planning Response',
    props<{ data: string }>());
    
export const getGameById = createAction(
    '[Planning Component] Get Game Detail by Id',
    props<{ userGuid: string }>());

export const getCardsByGameId = createAction(
    '[Planning Component] Get Cards',
    props<{ userGuid: string }>());

export const getPlanningGameById = createAction(
    '[Planning Component] Get Planning Game Detail by Id',
    props<{ userGuid: string }>());

export const setGame = createAction(
    '[Planning Component] Set Game Detail by Id',
    props<{ data: IGame }>());

export const setPlayCards = createAction(
    '[Planning Component] Set Cards',
    props<{ data: ICard[] }>());

export const insertUpdateUserStory = createAction(
    '[Planning Component] Insert update User Story',
    props<{ data: IUserStoryRequest }>());

export const selectCardOnGameBoard = createAction(
    '[Planning Component] Select Story Point',
    props<{ point: IGameBoardDto }>());