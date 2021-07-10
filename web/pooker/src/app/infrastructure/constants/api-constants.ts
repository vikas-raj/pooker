import { environment } from "../../../environments/environment";

export const API_Constants = {
  Register_USER: environment.POOKER_URL + 'Auth/RegisterUser',
  Login_USER: environment.POOKER_URL + 'Auth/LoginUser',

  GET_GAMES_By_USER: environment.POOKER_URL + 'Game/GetGamesByUser',
  GET_GAME_By_ID: environment.POOKER_URL + 'Game/GetGameByGuid',
  SAVE_GAME: environment.POOKER_URL + 'Game/CreateGame',
  GET_CARDS_BY_GAMEID: environment.POOKER_URL + 'Game/GetCardsByGameId',
  
  GET_PLANNING_GAME_By_ID: environment.POOKER_URL + 'Planning/GetGameByGuid',
  Insert_Update_UserStory: environment.POOKER_URL + 'Planning/InsertUpdateUserStory',
  INSERT_UDATE_SELECTED_CARD: environment.POOKER_URL + 'Planning/InsertUpdateGameBoard',
}
