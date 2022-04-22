import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comments } from '../comments';

@Injectable({
  providedIn: 'root'
})
export class CommentOpsService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:8080"


  public getComments()
  {
    let appid = localStorage.getItem("appid");
    return this.http.get<any>(`${this.baseUrl}/getComments/${appid}`,{
            headers: {
                'Content-Type': 'application/json'
            },})
  }


  public postComment(appid:Number,postedComment:Comments)
  {
    let email = localStorage.getItem("email");

    return this.http.post<any>(`${this.baseUrl}/postcomment/${email}/${appid}`,postedComment);
    // return this.http.post<any>(`${this.baseUrl}/postcomment/${email}/${appid}`,{
    //   headers: {
    //       'Content-Type': 'application/json'
    //   },},postedComment)
  }
}
