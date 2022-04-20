import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Gamer } from 'src/app/gamer';
import { AdminOpsService } from 'src/app/services/admin-ops.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private adminOpsService: AdminOpsService) { }

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

    this.dataLoaded = true;
  }

  /*Enables the add user form when the admin clicks on add user*/
  public addUser()
  {
    console.log("addGamer called!")
    this.addGamer = true;
  }

  /*adds the user to the dB by calling the API from the service*/
  public onAdd(gamerAdd : NgForm)
  {
    console.log(this.gamer);
    this.addGamer = false;
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
  

}
