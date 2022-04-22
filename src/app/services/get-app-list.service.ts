import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAppListService {

  constructor(private http: HttpClient) { }


  baseUrl = "http://localhost:8080"

  public gameList()
  {
    let token = localStorage.getItem("token");
    // let header = new HttpHeaders(
    //   {
    //   Authorization : "Bearer " + token
    //   }
    // )
    return this.http.get<any>(`${this.baseUrl}/games` )
  }

  public newRelease(appid:number)
  {
    return this.http.get(`${this.baseUrl}/newReleaseGames/${appid}`,{
      headers: {
          'Content-Type': 'application/json'
      },})
  }

  public getGameDetails(appid:number)
  {
    return this.http.get(`${this.baseUrl}/newReleaseGames/${appid}`,{
      headers: {
          'Content-Type': 'application/json'
      },})
  }


  public getMyGameDetailsByGenre(genre:String)
  {
    return this.http.get(`${this.baseUrl}/games/genre/${genre}`,{
      headers: {
          'Content-Type': 'application/json'
      },})
  }

}



//   constructor(private http: HttpClient) { }

//   getQuestionsUrl = "http://localhost:8080";

//   public getQuestions(sec_id: Number)
//   {
//     let pat_id = localStorage.getItem("id");  
//     return this.http.get<any>(`${this.getQuestionsUrl}/questions/${pat_id}/${sec_id}`)
//   }



// }


