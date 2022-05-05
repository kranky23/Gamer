import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comments } from '../comments';

@Injectable({
  providedIn: 'root'
})
export class CommentOpsService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:8090"


  public getComments()
  {
    let token = localStorage.getItem("token");
    let header = new HttpHeaders(
      {
      Authorization : "Bearer " + token
      }
    )
    let appid = localStorage.getItem("appid");
    return this.http.get<any>(`${this.baseUrl}/getComments/${appid}`,{headers:header,responseType:'json'} )
  }


  public postComment(appid:Number,postedComment:Comments)
  {
    let email = localStorage.getItem("email");
    let token = localStorage.getItem("token");
    let header = new HttpHeaders(
      {
      Authorization : "Bearer " + token
      }
    )
    return this.http.post<any>(`${this.baseUrl}/postcomment/${email}/${appid}`,postedComment,{headers:header,responseType:'json'} );
    // return this.http.post<any>(`${this.baseUrl}/postcomment/${email}/${appid}`,{
    //   headers: {
    //       'Content-Type': 'application/json'
    //   },},postedComment)
  }
}
