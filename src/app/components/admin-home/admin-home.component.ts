import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Gamer } from 'src/app/gamer';
import { AdminOpsService } from 'src/app/services/admin-ops.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private adminOpsService: AdminOpsService,
   private registerService : RegisterService) { }

  gamers:Gamer[] = []
  dataLoaded = false;
  gamer: Gamer = new Gamer;

  addGamer = false;

  async ngOnInit(): Promise<void> 
  {
    const data : any = await this.adminOpsService.getGamers().toPromise();
    console.log("Gamers are ",data);
    this.gamers = [];
    this.gamers = data;
    console.log("gamers array after copying is ",this.gamers);
    this.dataLoaded = true;
  }

  /*Enables the add user form when the admin clicks on add user*/
  public addUser()
  {
    console.log("addGamer called!")
    this.addGamer = true;
  }

  /*adds the user to the dB by calling the API from the service*/
  public async onAdd(gamerAdd : NgForm)
  {
    console.log(this.gamer);
    
    // if(this.addGamer==)
    let email = document.getElementById("email");

    for(var i=0;i<this.gamers.length;i++)
    {
      if(this.gamers[i].email == this.gamer.email)
      {
        alert("email already exists! Try new email ID")
        return;
      }
      if(this.gamers[i].username == this.gamer.username)
      {
        alert("Username taken! Try another one");
        this.gamer.username = "";
        return;
      }
    }
    
    const data : any = await this.registerService.enroll(this.gamer).toPromise();
    
    alert("New Gamer added!")
    this.addGamer = false;
    this.ngOnInit();
  }


  /*Delete user from the dB by calling the API from the service*/
  async deleteUser(gamer:Gamer)
  {
    console.log(gamer.email);
    const res : any = await this.adminOpsService.deleteGamer(gamer.email).toPromise();

    // const data : any = await this.adminOpsService.deleteGamer(gamer.email).subscribe(
    //   (data:any) => {

    //     console.log('Deletion successful ',data)

    //   },
    //   (error:any) => {
    //     console.log('Error obtaining games!',error)
    //   }
    // )
    console.log("message obtained after delete uesr is ",res);
    this.ngOnInit();
  }

  public logOutUser()
  {
    localStorage.removeItem("token");
    localStorage.removeItem("alphabet");
    localStorage.removeItem("email");
    localStorage.removeItem("appid");
    localStorage.removeItem("id");
    localStorage.removeItem("lname");

    localStorage.removeItem("fname");
    window.location.href = "login"
    // this.router.navigate(['']);
    // location.reload();
  }
  

}
