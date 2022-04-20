import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Gamer } from 'src/app/gamer';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginService:LoginService) { }
  
  gamer: Gamer = new Gamer();

  ngOnInit(): void {
  }
  
  public onSubmit(gamerSignUp : NgForm)
  {
    console.log(this.gamer);
    if(this.gamer.role=="gamer")
    {
      console.log("gamer login")
      this.loginService.generateToken(this.gamer)
        .subscribe(
          (data: any) => {

            console.log('Gamer login Success!', data);
            // window.location.href = "home"

          },
          (error: any) => {
            console.log('Error', error), alert("Wrong credentials, try again! ")
            // window.location.href = "login"
          }

        )
    }
    else if(this.gamer.role=="admin")
    {
      console.log("admin login")
      this.loginService.adminLogin(this.gamer)
        .subscribe(
          (data: any) => {

            console.log('Admin login Success!', data);
            window.location.href = "adminhome"

          },
          (error: any) => {
            console.log('Error', error), alert("Wrong credentials, try again! ")
            // window.location.href = "login"
          }

        )
    }
  }
}
