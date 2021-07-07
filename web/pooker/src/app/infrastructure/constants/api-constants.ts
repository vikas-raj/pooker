import { environment } from "../../../environments/environment";

export const API_Constants = {
  GET_GAMES_By_USER: environment.POOKER_URL + 'Game/GetGamesByUser',
  GET_GAME_By_ID: environment.POOKER_URL + 'Game/GetGameByGuid',
  SAVE_GAME: environment.POOKER_URL + 'Game/CreateGame',
  Register_USER: environment.POOKER_URL + 'Auth/RegisterUser',
  Login_USER: environment.POOKER_URL + 'Auth/LoginUser',
  Insert_Update_UserStory: environment.POOKER_URL + 'Planning/InsertUpdateUserStory',
  INSERT_UPDATE_GAME_BOARD: environment.POOKER_URL + 'Planning/InsertUpdateGameBoard',
}
