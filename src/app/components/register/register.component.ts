import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Gamer } from 'src/app/gamer';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public registerService:RegisterService) { }

  gamer: Gamer = new Gamer();

  ngOnInit(): void {
  }


  public onSubmit(gamerSignUp : NgForm)
  {
    console.log(this.gamer);
    this.registerService.enroll(this.gamer)
    .subscribe(
      (data:any) => {

        console.log('Success!',data),alert("Registration Success! Kindly login ")
        window.location.href = "login"

      },
      (error: any) => {console.log('Error',error),alert("Email error! ")
      window.location.href = "/"
    }
      
    )
    
  }
}
