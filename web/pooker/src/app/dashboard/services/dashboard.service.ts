import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { IGame } from "../../models/IGame";
import { IGameRequest } from "../models/IGameRequest";

@Injectable()
export class DashboardService {
  constructor(private httpClient: HttpClient) {

  }

  getGames(): Observable<IGame[]> {
    return this.httpClient.get<IGame[]>('');
  }

  saveGame(gameRequest: IGameRequest): Observable<any> {
    return this.httpClient.post<any>('', gameRequest);
  }
}
