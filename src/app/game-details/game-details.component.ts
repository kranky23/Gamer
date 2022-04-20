import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { GetAppListService } from '../services/get-app-list.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  constructor(private getAppListService : GetAppListService) { }
  appIds:number[] = []
  appNames:String[] = []
  
  responses:any[] = []

  
  ngOnInit(): void {


    this.getAppListService.gameList().subscribe(
      (data:any) => {

        console.log('THe obtained list of questions is ',data)
        console.log(data[0].applist.apps[1].name)

        for(var i=0;i<139715;i++)
        {
          this.appIds[i] = data[0].applist.apps[i].appid;
          this.appNames[i] = data[0].applist.apps[i].name;
        }
        console.log("length of the appIds is ",this.appIds.length)
        console.log("AppIDs are ",this.appIds)
    
      },
      (error:any) => {console.log('Error obtaining games!',error)}
    )

      // end of loading the game ids. now start to store the game data.

  }

  
  // delay = (ms: number) => new Promise(res => setTimeout(res, ms));

  public apps()
  {
    this.getAppListService.gameList().subscribe(
      (data:any) => {

        console.log('THe obtained list of games is ',data)
        console.log(data[0].applist.apps[1].name)

        for(var i=0;i<139715;i++)
        {
          this.appIds[i] = data[0].applist.apps[i].appid
        }
        console.log("length of the appIds is ",this.appIds.length)
        console.log("AppIDs are ",this.appIds)
    
      },
      (error:any) => {console.log('Error obtaining games!',error)}
    )
  }

  public callThisMethod() {
    // for(var i=0;i<this.responses.length;i++)
    {
  
      console.log(this.responses);
    }
  }

  

  public async getNewReleasedGames()
  {
    console.log("array values are ",this.appIds)
    for(let i=0;i<5;i++)
    {
      // console.log("i value is " , this.appIds[i]);

      (await
        // console.log("i value is " , this.appIds[i]);
        this.getAppListService.newRelease(this.appIds[i])).subscribe(
         (data:any) => {
          // await this.delay(1000);

          this.responses[i] = data;
          // console.log("i value is ",i)
          var id = this.appIds[i];
          // console.log(data);
          // console.log("data obtained is " , data);
          // console.log(data[id].success);
          // console.log('data.success value is  ',data[0][216938].data.release_date.coming_soon)
          // console.log(data[0].applist.apps[1].name)
          if(data[id].success===true)
          {
            // console.log("game is valid")
            if(data[id].data.release_date.coming_soon==true)
            {
              console.log("Newly released game is ", data[this.appIds[i]].data.name)
            }
          }  
        },
        (error:any) => {
          console.log('Error obtaining game details!',error)
        }
      )

    }
    // console.log(this.responses.length)
  }



}


