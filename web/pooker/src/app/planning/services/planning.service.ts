import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_Constants } from 'src/app/infrastructure/constants/api-constants';
import { IGame } from 'src/app/models/IGame';

@Injectable()
export class PlanningService {

  constructor(private httpClient: HttpClient) { }

  getGameById(userGuid: string): Observable<any> {
    const url = `${API_Constants.GET_GAME_By_ID}/${userGuid}`;
    return this.httpClient.get<IGame>(url);
  }
}
