import { environment } from "../../../environments/environment";

export const API_Constants = {
  GET_GAMES: environment.POOKER_URL + 'Game/GetGamesByGuid',
  SAVE_GAME: environment.POOKER_URL + 'Game/CreateGame'
}
