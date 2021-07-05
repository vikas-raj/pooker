import { createAction, props } from "@ngrx/store";
import { IGame } from "src/app/models/IGame";

export const getGameById = createAction(
    '[Planning Component] Get Game Detail by Id',
    props<{ userGuid: string }>());

export const setGame = createAction(
    '[Planning Component] Set Game Detail by Id',
    props<{ data: IGame }>());