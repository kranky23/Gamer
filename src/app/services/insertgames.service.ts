import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameDetails } from '../game-details';
import { Gamer } from '../gamer';
import { Games } from '../games';

@Injectable({
  providedIn: 'root'
})
export class InsertgamesService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:8080";

  insert(game: Games)
  {
    return this.http.post<any>(`${this.baseUrl}/insertGames`,game);
  }

  insertGameDetails(gamedetails: GameDetails)
  {
    return this.http.post<any>(`${this.baseUrl}/insertGameDetails`,gamedetails);
  }


}
