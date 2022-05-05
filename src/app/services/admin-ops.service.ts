import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gamer } from '../gamer';

@Injectable({
  providedIn: 'root'
})
export class AdminOpsService {

  constructor(private http: HttpClient) { }


  baseUrl = "http://localhost:8090"

  public getGamers()
  {
    let token = localStorage.getItem("token");
    let header = new HttpHeaders(
      {
      Authorization : "Bearer " + token
      }
    )
    return this.http.get<any>(`${this.baseUrl}/getGamers`,{headers:header,responseType:'json'} )
  }

  public deleteGamer(email:string)
  {
    let token = localStorage.getItem("token");
    let header = new HttpHeaders(
      {
      Authorization : "Bearer " + token
      }
    )
    return this.http.delete<any>(`${this.baseUrl}/deleteGamer/${email}`,{headers:header,responseType:'json'} )
  }




}
