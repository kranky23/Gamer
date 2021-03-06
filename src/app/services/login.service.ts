import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Gamer } from '../gamer';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    

  constructor(private router: Router,private http : HttpClient) { }


  url = "http://localhost:8090"

  generateToken(gamer:Gamer)
  {
    console.log("service method called")
    return this.http.post(`${this.url}/token`,gamer);
  }

  //to check whether user is logged in or not..
  public isLoggedIn()
  {
    var token = localStorage.getItem("token");
    if(token == undefined || token == '' || token == null)
      return false;
    return true;
  }

    //for the user to logout..
    public logOut()
    {
      localStorage.removeItem("token");
      // location.reload()
      return true;
    }

    public adminLogin(gamer:Gamer)
    {
      return this.http.post(`${this.url}/token`,gamer);
    }

    public getToken() {
      return localStorage.getItem("token");
  }


}
