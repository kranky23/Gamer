import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAppListService {

  constructor(private http: HttpClient) { }


  baseUrl = "http://localhost:8090"

  public gameList()
  {
    let token = localStorage.getItem("token");
    let header = new HttpHeaders(
      {
      Authorization : "Bearer " + token
      }
    )
    return this.http.get<any>(`${this.baseUrl}/games`,{headers:header,responseType:'json'} )
  }

  public newRelease(appid:number)
  {
    let token = localStorage.getItem("token");
    let header = new HttpHeaders(
      {
      Authorization : "Bearer " + token
      }
    )
    return this.http.get(`${this.baseUrl}/newReleaseGames/${appid}`,{headers:header,responseType:'json'})
  }

  public newReleases()
  {
    let token = localStorage.getItem("token");
    let header = new HttpHeaders(
      {
      Authorization : "Bearer " + token
      }
    )
    return this.http.get(`${this.baseUrl}/newReleaseGamesFromMyDatabase`,{headers:header,responseType:'json'})
  }

  public getGameDetails(appid:number)
  {
    let token = localStorage.getItem("token");
    let header = new HttpHeaders(
      {
      Authorization : "Bearer " + token
      }
    )
    return this.http.get(`${this.baseUrl}/newReleaseGames/${appid}`,{headers:header,responseType:'json'})
  }


  public getMyGameDetailsByGenre(genre:String)
  {
    let token = localStorage.getItem("token");
    let header = new HttpHeaders(
      {
      Authorization : "Bearer " + token
      }
    )
    return this.http.get(`${this.baseUrl}/games/genre/${genre}`,{headers:header,responseType:'json'})
  }

}



//   constructor(private http: HttpClient) { }

//   getQuestionsUrl = "http://localhost:8090";

//   public getQuestions(sec_id: Number)
//   {
//     let pat_id = localStorage.getItem("id");  
//     return this.http.get<any>(`${this.getQuestionsUrl}/questions/${pat_id}/${sec_id}`)
//   }



// }


