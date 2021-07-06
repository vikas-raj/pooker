import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { API_Constants } from 'src/app/infrastructure/constants/api-constants';
import { IGame } from 'src/app/models/IGame';
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

  insertUpdateUserStoryDetail(userStoryRequest: IUserStoryRequest): Observable<IGame> {
    const url = `${API_Constants.Insert_Update_UserStory}`;
    return this.httpClient.post<IGame>(url, userStoryRequest);
  }
}
