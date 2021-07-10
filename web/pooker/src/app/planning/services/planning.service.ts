import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { API_Constants } from 'src/app/infrastructure/constants/api-constants';
import { ICard } from 'src/app/models/ICard';
import { IGame } from 'src/app/models/IGame';
import { IGameBoardDto } from '../models/IGameBoardDto';
import { IUserStoryRequest } from '../models/IUserStoryRequest';

@Injectable()
export class PlanningService {

  constructor(private httpClient: HttpClient) { }

  getGameById(userGuid: string): Observable<IGame> {
    const url = `${API_Constants.GET_GAME_By_ID}/${userGuid}`;
    return this.httpClient.get<IGame>(url).pipe(
      tap(x => {
        console.log(x);
      })
    );
  }

  getCardsByGameId(userGuid: string): Observable<ICard[]> {
    const url = `${API_Constants.GET_CARDS_BY_GAMEID}/${userGuid}`;
    return this.httpClient.get<ICard[]>(url).pipe(
      tap(x => {
        console.log(x);
      })
    );
  }

  getPlanningGameById(userGuid: string): Observable<IGame> {
    const url = `${API_Constants.GET_PLANNING_GAME_By_ID}/${userGuid}`;
    return this.httpClient.get<IGame>(url).pipe(
      tap(x => {
        console.log(x);
      })
    );
  }

  insertUpdateUserStoryDetail(userStoryRequest: IUserStoryRequest): Observable<any> {
    const url = `${API_Constants.Insert_Update_UserStory}`;
    return this.httpClient.post<any>(url, userStoryRequest);
  }

  insertUdateSelectedCard(gameBoardDto: IGameBoardDto): Observable<any> {
    debugger;
    const url = `${API_Constants.INSERT_UDATE_SELECTED_CARD}`;
    return this.httpClient.post<any>(url, gameBoardDto);
  }
}
