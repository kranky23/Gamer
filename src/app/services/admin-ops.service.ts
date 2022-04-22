import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gamer } from '../gamer';

@Injectable({
  providedIn: 'root'
})
export class AdminOpsService {

  constructor(private http: HttpClient) { }


  baseUrl = "http://localhost:8080"

  public getGamers()
  {
    return this.http.get<any>(`${this.baseUrl}/getGamers`,{
            headers: {
                'Content-Type': 'application/json'
            },})
  }

  public deleteGamer(email:string)
  {
    return this.http.delete<any>(`${this.baseUrl}/deleteGamer/${email}`,{
      headers: {
          'Content-Type': 'application/json'
      },})
  }




}
