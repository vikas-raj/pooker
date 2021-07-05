import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { IGame } from "../../models/IGame";
import { IGameRequest } from "../models/IGameRequest";
import { API_Constants } from "../../infrastructure/constants/api-constants";

@Injectable()
export class DashboardService {
  constructor(private httpClient: HttpClient) {
  }

  getGames(): Observable<any> {
    const url = `${API_Constants.GET_GAMES_By_USER}`;
    return this.httpClient.get<IGame[]>(url);
  }

  saveGame(gameRequest: IGameRequest): Observable<any> {
    const url = API_Constants.SAVE_GAME;
    return this.httpClient.post<any>(url, gameRequest);
  }
}
