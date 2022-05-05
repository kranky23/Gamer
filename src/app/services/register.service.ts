import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gamer } from '../gamer';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  registrationUrl = 'http://localhost:8090/register';

  constructor(private http: HttpClient) { }

  enroll(gamer: Gamer)
  {
    return this.http.post<any>(this.registrationUrl,gamer);
  }
}
